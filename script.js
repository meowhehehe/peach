let div = document.createElement("div");
div.className = "modalW";
document.body.appendChild(div);

let X = document.createElement('button');
X.className = "cross";
X.textContent = "✖";
div.appendChild(X);

let gif = document.createElement("img");
gif.className = "modalGif";
gif.src = "https://gifs.obs.ru-moscow-1.hc.sbercloud.ru/e8c418474f8ab844e11d953ee4881410a0f6657bbca067bd9036bb30d48b6ea2.gif";
div.appendChild(gif);

const btn = document.getElementById('key');
btn.addEventListener('click', open);

X.addEventListener('click', close);

function open()
{
    div.style.display = "block";
}

function close()
{
    div.style.display = "none";
}