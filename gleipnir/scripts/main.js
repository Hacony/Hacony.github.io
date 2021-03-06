// Array.map polyfill
Array.prototype.map||(Array.prototype.map=function(r){var t,n,o;if(null==this)throw new TypeError("this is null or not defined");var e=Object(this),i=e.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=new Array(i),o=0;o<i;){var a,p;o in e&&(a=e[o],p=r.call(t,a,o,e),n[o]=p),o++}return n});

// Array.each polyfill
Array.prototype.forEach||(Array.prototype.forEach=function(r,o){if(null==this)throw new TypeError("Array.prototype.forEach called on null or undefined");var t,n,e=Object(this),a=e.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(t=o),n=0;n<a;){var f;n in e&&(f=e[n],r.call(t,f,n,e)),n++}});

(async () => {
const dataJsonUrl = 'data.json';
const skipAnimations = false;
let sectionIds = [];
let sectionDataMap = {};

const sectionContentContainer = document.querySelector('#sectionContentContainer');

function isOnMobile() {
    return window.innerWidth <= 768;
}

function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

async function loadData(url, updateProgressCallback) {
    // Do download
    let response = await fetch(url);
    const reader = response.body.getReader();
    const contentLength = response.headers.get('Content-Length');
    let receivedLength = 0; // received that many bytes at the moment
    let chunks = []; // array of received binary chunks (comprises the body)
    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value); 
        receivedLength += value.length;

        updateProgressCallback && updateProgressCallback(receivedLength / contentLength);
    }

    // Concatenate chunks into single Uint8Array
    let chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }

    let result = new TextDecoder("utf-8").decode(chunksAll);
    return result;
}

function removeAllNextSiblings(node) {
    // Remove nodes below
    let curNodeToRemove = node.nextElementSibling;
    while (curNodeToRemove) {
        const nextSibling = curNodeToRemove.nextElementSibling;
        curNodeToRemove.remove();
        curNodeToRemove = nextSibling;
    }
}

function scrollToSection(index) {
    if (index < 0) {
        index = sectionContentContainer.children.length + index;
    }
    scrollToElement(sectionContentContainer.children[index]);
}

function scrollToElement(elem) {
    window.requestAnimationFrame(() => window.scrollTo({ top: elem.offsetTop - (isOnMobile() ? 30 : 50), behavior: 'smooth' }));
}

function addSectionToContainer(sectionElem) {
    if (!skipAnimations) {
        sectionElem.classList.add('hidden');

        // Animate fade in
        var observer = new MutationObserver(() => {
            if (sectionContentContainer.contains(sectionElem)) {
                setTimeout(() => sectionElem.classList.remove('hidden'), 100);
                observer.disconnect();
            }
        });
        observer.observe(sectionContentContainer, { childList: true });
    }

    sectionContentContainer.appendChild(sectionElem);
}

function addSection(sectionId, parentNode, isInteractiveMode) {
    isInteractiveMode = !!isInteractiveMode;

    if (parentNode) {
        // Remove nodes below
        removeAllNextSiblings(parentNode);
    }

    const sectionData = sectionDataMap[sectionId];
    const sectionElem = renderSection(sectionData, isInteractiveMode);
    addSectionToContainer(sectionElem);
}

function renderSection(sectionData, isInteractiveMode) {
    const section = document.querySelector('#sectionContentTemplate').content.cloneNode(true).children[0];
    const sectionContent = renderSectionContent(sectionData, isInteractiveMode);
    section.querySelector('.sectionContent').append(...sectionContent);
    return section;
}

function renderSectionContent(sectionData, isInteractiveMode) {
    const { id, title, content, level } = sectionData;
    let contentElems = [];
    
    const headerLevel = (isInteractiveMode ? 1 : level);
    const headerNode = document.createElement(`h${headerLevel}`);
    headerNode.id = id;
    headerNode.append(title);
    contentElems.push(headerNode);

    contentElems = contentElems.concat(renderSectionElem(content, isInteractiveMode));

    return contentElems;
}

function renderFirstSection() {
    const section = document.querySelector('#sectionContentTemplate').content.cloneNode(true).children[0];
    section.querySelector('.sectionContent').append(
        document.querySelector('#firstSectionContent').content.cloneNode(true)
    );

    Array.from(section.querySelectorAll('a[data-link-type="view-start"]'))
        .forEach(elem => elem.addEventListener('click', () => {
            event.preventDefault();
            removeAllNextSiblings(sectionContentContainer.children[0]);
            addSection(sectionIds[0], section, true);
            scrollToSection(-1);
        }));

    Array.from(section.querySelectorAll('a[data-link-type="view-all"]'))
        .forEach(elem => elem.addEventListener('click', () => {
            event.preventDefault();
            removeAllNextSiblings(sectionContentContainer.children[0]);
            addSectionToContainer(renderSectionContentPage(false));
            addSectionToContainer(renderSectionAllContent());
            scrollToSection(1);
        }));

    Array.from(section.querySelectorAll('a[data-link-type="view-content-page"]'))
        .forEach(elem => elem.addEventListener('click', () => {
            event.preventDefault();
            removeAllNextSiblings(sectionContentContainer.children[0]);
            addSectionToContainer(renderSectionContentPage(true));
            scrollToSection(1);
        }));

    Array.from(section.querySelectorAll('a[data-link-type="view-test-styles"]'))
        .forEach(elem => elem.addEventListener('click', () => {
            event.preventDefault();
            removeAllNextSiblings(sectionContentContainer.children[0]);
            addSectionToContainer(renderSectionTestStyle());
            scrollToSection(-1);
        }));

    Array.from(section.querySelectorAll('a[data-link-type="clear-content"]'))
        .forEach(elem => elem.addEventListener('click', () => {
            event.preventDefault();
            removeAllNextSiblings(sectionContentContainer.children[0]);
        }));

    Array.from(section.querySelectorAll('a'))
        .forEach(elem => {
            const splittedUrl = elem.href.split('#');
            if (splittedUrl.length == 1 || splittedUrl[1].length == 0) {
                return;
            }
            const sectionId = splittedUrl[1];
            elem.addEventListener('click', (event) => {
                event.preventDefault();
                removeAllNextSiblings(sectionContentContainer.children[0]);
                addSection(sectionId);
                scrollToSection(-1);
            });
        });

    return section;
}

function renderSectionTestStyle() {
    const section = document.querySelector('#sectionContentTemplate').content.cloneNode(true).children[0];
    const sectionContent = [];
    let newNode;
    for (var i = 1; i <= 6; i++) {
        newNode = document.createElement(`h${i}`);
        newNode.innerHTML = `Header ${i}`;
        sectionContent.push(newNode);

        newNode = document.createElement(`p`);
        newNode.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum, ligula vel lobortis tincidunt, sem purus dapibus magna, id sollicitudin nulla libero et quam. Vivamus lobortis, enim sit amet facilisis iaculis, ante quam volutpat augue, ac scelerisque tellus ex id mi. Sed laoreet tortor dapibus augue molestie congue. Cras ligula massa, consectetur non odio mollis, ullamcorper laoreet lorem. Morbi magna leo, faucibus vitae bibendum in, ornare a sapien. Aliquam pharetra cursus auctor. Mauris in egestas lectus. Vivamus eu accumsan tortor, sit amet lobortis mauris. Proin urna diam, tempus sed fermentum quis, sagittis nec nisl. Vivamus porttitor metus vel feugiat suscipit. Nulla facilisi. In quis leo tempor, euismod mauris sit amet, ultrices mi.`;
        sectionContent.push(newNode);
    }

    newNode = document.createElement('p');
    const styleCombinationCount = Math.pow(2, styleHtmlMap.length);
    const htmlContent = [];
    function toTitleCase(text) { return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase(); }
    for (var i = 0; i < styleCombinationCount; i++) {
        const includedStyles = styleHtmlMap
            .map((style, j) => ((i >> j) & 1) ? style : undefined)
            .filter(x => x !== undefined);
        const prefix = includedStyles.map(x => `<${x.tag}>`).join('');
        const suffix = reversed(includedStyles.map(x => `</${x.tag}>`)).join('');
        let textContent;
        if (includedStyles.length == 0) {
            textContent = 'None';
        } else if (includedStyles.length == 1) {
            textContent = `${toTitleCase(includedStyles[0].style)}`;
        } else if (includedStyles.length == 2) {
            textContent = `${toTitleCase(includedStyles[0].style)} and ${toTitleCase(includedStyles[1].style)}`;
        } else {
            const [first, ...others] = includedStyles;
            const last = others.pop();
            textContent = `${toTitleCase(first.style)}, ${others.map(x => x.style).join(', ')}, and ${toTitleCase(last.style)}`;
        }
        htmlContent.push(`${prefix}${textContent}${suffix}`);
    }
    newNode.innerHTML = htmlContent.join('<br>');
    sectionContent.push(newNode);

    section.querySelector('.sectionContent').append(...sectionContent);
    return section;
}

function renderSectionAllContent() {
    const section = document.querySelector('#sectionContentTemplate').content.cloneNode(true).children[0];
    const sectionContent = section.querySelector('.sectionContent');
    sectionIds.forEach(sectionId => {
        const sectionData = sectionDataMap[sectionId];
        sectionContent.append(...renderSectionContent(sectionData, false));
    });
    return section;
}

function renderSectionContentPage(isInteractiveMode) {
    const section = document.querySelector('#sectionContentTemplate').content.cloneNode(true).children[0];
    const sectionContent = section.querySelector('.sectionContent');
    
    const header = document.createElement('h1');
    header.innerHTML = 'Content Page';
    sectionContent.append(header);

    const lastHeaderLevel = [sectionContent];
    sectionIds.forEach(sectionId => {
        const sectionData = sectionDataMap[sectionId];
        const { title, level } = sectionData;
        if (!lastHeaderLevel[level - 1].querySelector('ol')) {
            lastHeaderLevel[level - 1].append(document.createElement('ol'));
        }
        const newAnchorElem = document.createElement('a');
        newAnchorElem.innerHTML = title;
        newAnchorElem.href = `#${sectionId}`;
        if (isInteractiveMode) {
            newAnchorElem.addEventListener('click', () => {
                addSection(
                    sectionId,
                    newAnchorElem.closest('.sectionContentRow'),
                    true
                );
                scrollToSection(-1);
            });
        } else {
            newAnchorElem.addEventListener('click', (event) => {
                event.preventDefault();
                scrollToElement(document.querySelector(`#${sectionId}`));
            });
        }

        const newLiElem = document.createElement('li');
        newLiElem.append(newAnchorElem);
        lastHeaderLevel[level] = newLiElem;
        lastHeaderLevel[level - 1].querySelector('ol').append(newLiElem);
    });

    return section;
}

const styleHtmlMap = [
    { style: 'bold', tag: 'b' },
    { style: 'italic', tag: 'i' },
    { style: 'underline', tag: 'u' },
    { style: 'strikethrough', tag: 'del' },
    { style: 'subscript', tag: 'sub' },
    { style: 'superscript', tag: 'sup' },
];

function reversed(arr) {
    const newArr = [...arr];
    newArr.reverse();
    return newArr;
}

function renderSectionElem(json_data, isInteractiveMode) {
    if (Array.isArray(json_data)) {
        return json_data.map(childNode => renderSectionElem(childNode, isInteractiveMode));
    } else if (json_data.node == 'paragraph') {
        const elem = document.createElement('p');
        if (json_data.style?.text_align && json_data.style.text_align != 'left') {
            elem.style.textAlign = json_data.style.text_align;
        }
        elem.append(...renderSectionElem(json_data.content, isInteractiveMode));
        return elem;
    } else if (json_data.node == 'text') {
        let elem = document.createTextNode(json_data.content);
        if (json_data.style) {
            reversed(styleHtmlMap).forEach(({ style: styleName, tag }) => {
                if (json_data.style[styleName]) {
                    const tempNode = document.createElement(tag);
                    tempNode.append(elem);
                    elem = tempNode;
                }
            });
        }
        if (json_data.href) {
            const anchorNode = document.createElement('a');
            anchorNode.href = json_data.href;
            anchorNode.append(elem);
            elem = anchorNode;

            if (json_data.href.charAt(0) == '#') {
                if (isInteractiveMode) {
                    anchorNode.addEventListener('click', (event) => {
                        event.preventDefault();
                        addSection(
                            json_data.href.substr(1),
                            anchorNode.closest('.sectionContentRow'),
                            isInteractiveMode
                        );
                        scrollToSection(-1);
                    });
                } else {
                    anchorNode.addEventListener('click', (event) => {
                        event.preventDefault();
                        scrollToElement(document.querySelector(json_data.href));
                    });
                }
            } else {
                // external link
                anchorNode.setAttribute('target', '_blank');
                anchorNode.rel = 'noreferrer';
            }
        }
        return elem;
    } else if (json_data.node == 'image') {
        const elem = document.createElement('img');
        elem.src = `imgs/${json_data.src}`;
        return elem;
    } else if (json_data.node == 'list') {
        const elem = document.createElement(json_data.ordered ? 'ol' : 'ul');
        elem.append(...renderSectionElem(json_data.content, isInteractiveMode));
        return elem;
    } else if (json_data.node == 'list-item') {
        const elem = document.createElement('li');
        if (json_data.value !== undefined) {
            elem.value = json_data.value;
        }
        elem.append(...renderSectionElem(json_data.content, isInteractiveMode));
        return elem;
    } else if (json_data.node == 'break') {
        return document.createElement('br');
    } else if (json_data.node == 'html') {
        const template = document.createElement('template');
        template.innerHTML = json_data.content;
        return template.content.cloneNode(true);
    } else {
        console.error(json_data);
        throw 'Unrecognised json data'
    }
}


async function init() {
    // Create loader bar
    const loaderTextFill = document.querySelector('#loaderTextFill');
    let loaderProgress = 0;
    let curLoaderHeightP = 0;

    function calcLoaderHeight(p) {
        const imgHeight = 811;
        const marginTop = 122;
        const marginBottom = 63 + 40; // +40 so the initial line cuts through the text

        if (p >= 1) {
            return 1;
        } else if (p <= 0) {
            return (marginBottom / imgHeight);
        } else {
            return (marginBottom + (p * (imgHeight - marginBottom - marginTop))) / imgHeight;
        }
    }

    let prevTimestamp;
    function updateLoaderFill(curTimestamp) {
        const timeStep = prevTimestamp === undefined ? 100 : (curTimestamp - prevTimestamp);
        prevTimestamp = curTimestamp;
        const targetLoaderHeightP = calcLoaderHeight(loaderProgress);
        const easeScale = 0.3;
        const heightDiff = targetLoaderHeightP - curLoaderHeightP;
        const step = Math.min(1, timeStep / 100 * easeScale) * heightDiff;
        curLoaderHeightP += step;
        if (targetLoaderHeightP == 1 && curLoaderHeightP >= 0.99) {
            curLoaderHeightP = 1;
            loaderTextFill.style.transform = `translateY(-${curLoaderHeightP * 100}%)`;
        } else {
            loaderTextFill.style.transform = `translateY(-${curLoaderHeightP * 100}%)`;
            window.requestAnimationFrame(updateLoaderFill);
        }
    }
    window.requestAnimationFrame(updateLoaderFill);
    
    const loaderDiv = document.querySelector('#loader');
    const contentDiv = document.querySelector('#content');

    if (skipAnimations) {
        loaderDiv.style.transition = '';
        contentDiv.style.transition = '';

        loaderDiv.classList.add('hidden');
        contentDiv.classList.remove('hidden');
    } else {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }

    const rawDocData = await loadData(dataJsonUrl, progress => { loaderProgress = progress; });
    skipAnimations || await sleep(1000);
    
    document.querySelector('#loaderTextReady').classList.remove('hidden');
    skipAnimations || await sleep(500);
    document.querySelector('#subtitle').classList.remove('hidden');
    skipAnimations || await sleep(500);

    const docData = JSON.parse(rawDocData);
    sectionIds = docData.map(sectionData => sectionData.id);
    sectionDataMap = {};
    docData.forEach(sectionData => { sectionDataMap[sectionData.id] = sectionData; });

    while (sectionContentContainer.lastElementChild) {
        sectionContentContainer.lastElementChild.remove();
    }

    addSectionToContainer(renderFirstSection());
}

init();
})();