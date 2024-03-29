var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./style/ui.css";
import "./style/reset.css";
import "./utils/resizer";
import configs from "./contentreel.config.js";
let selectionSize = 0;
let randomArr = [];
let loading = true;
const loader = "<div class='skeleton-loader'></div>";
let PickitMediaArray = [];
let currentPage = 1;
const previewSize = 0;
const randomButton = document.getElementById("random");
randomButton.onclick = () => {
    window.parent.postMessage({ pluginMessage: { do: "random" } }, "*");
};
const itemListDiv = document.getElementById("item-list");
const searchBar = document.getElementById("search");
const pickitHeaders = {
    "Pickit-Api-Key": `${configs.PICKIT_API_KEY}`,
    "Pickit-Api-Secret": `${configs.PICKIT_SECRET}`,
    "Pickit-Api-Library": "media",
};
const baseCall = "https://files.pickit.com/api/v2/files?page_limit=200";
// Event listener for search
searchBar.addEventListener("keydown", (e) => {
    let searchTerm = "";
    if (e.key === "Enter") {
        searchTerm = searchBar.value;
        window.parent.postMessage({
            pluginMessage: {
                do: "load",
                style: "search",
                searchString: searchTerm,
            },
        }, "*");
    }
});
// On network request from the plugin, fetch information from Pickit.
// TODO: Add offset instead of iteratiing on requestmax
window.onmessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
    loading = !loading;
    itemListDiv.innerHTML = loading ? loader : "";
    if (event.data.pluginMessage.type === "multiples") {
        selectionSize = event.data.pluginMessage.size;
    }
    // On startup run through sample pickit library to get a random array of images to populate with
    if (event.data.pluginMessage.style === "first-call") {
        fetch(`${baseCall}`, {
            headers: pickitHeaders,
        })
            .then((res) => res.json())
            .then((response) => {
            loading = false;
            // Clear array since I'm just looping through maxRecords
            PickitMediaArray = [];
            const responseArray = response.data;
            responseArray.map((entry) => {
                //Loop through entries and add the 'fields' of each entry to the array
                PickitMediaArray.push(entry);
            });
        })
            .then((e) => PopulateView())
            .catch((error) => {
            console.log(error);
        });
    }
    // Searching renders output with max page size of all found images
    if (event.data.pluginMessage.style === "search") {
        fetch(`${baseCall}` +
            new URLSearchParams({
                page_limit: "200",
                search: event.data.pluginMessage.searchString,
            }), {
            headers: pickitHeaders,
        })
            .then((res) => res.json())
            .then((response) => {
            loading = false;
            // Clear array since I'm just looping through maxRecords
            PickitMediaArray = [];
            const responseArray = response.data;
            responseArray.map((entry) => {
                //Loop through entries and add the 'fields' of each entry to the array
                PickitMediaArray.push(entry);
            });
        })
            .then((e) => {
            PopulateView();
        })
            .catch((error) => {
            console.log(error);
        });
    }
    // If random, render random image from default array
    if (event.data.pluginMessage.style === "random" &&
        PickitMediaArray.length >= 1) {
        let randomImage = PickitMediaArray[Math.floor(Math.random() * PickitMediaArray.length)]
            .file.previews[previewSize];
        AddImageToUI(randomImage);
    }
});
const AddImageToUI = (image) => {
    const img = new Image();
    img.onload = () => {
        const width = image.width;
        const height = image.height;
        fetch(image.url)
            .then((response) => response.blob())
            .then((blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(new Uint8Array(reader.result));
            reader.readAsArrayBuffer(blob);
        }))
            .then((imageBytes) => {
            parent.postMessage({
                pluginMessage: {
                    type: "attachment",
                    width: width,
                    height: height,
                    imageBytes,
                },
            }, "*");
        });
    };
    img.src = image.url;
};
// Populates view with images from pickit
const PopulateView = () => __awaiter(void 0, void 0, void 0, function* () {
    if (itemListDiv.innerHTML != null) {
        itemListDiv.innerHTML = "";
    }
    PickitMediaArray.map((media) => {
        const imgFile = media.file.previews[previewSize];
        const listItem = document.createElement("div");
        listItem.className = "list-item";
        const attachment = new Image();
        attachment.className = "attachment";
        attachment.width = imgFile.width;
        attachment.height = imgFile.height;
        attachment.src = imgFile.url;
        //listItem.appendChild(descriptions);
        listItem.appendChild(attachment);
        itemListDiv.appendChild(listItem);
        attachment.onclick = () => {
            AddImageToUI(imgFile);
        };
    });
});
