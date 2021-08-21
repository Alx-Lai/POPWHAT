let openImgURL = chrome.runtime.getURL('images/open.png')
let closeImgURL = chrome.runtime.getURL('images/close.png')
let bgImgURL = chrome.runtime.getURL('images/bg.png')
var styles = `
	.op {
		background-image:url(${openImgURL});
	}
	.p {
		background-image:url(${closeImgURL});
	}
	body::before {
		background-image:url(${bgImgURL});
		transform:none;
		top:0%;
		left:0%;
		width:120%;
		height:120%;
		background-size:contain;
		background-repeat: repeat;
	}
`
let styleSheet = document.createElement('style')
styleSheet.type = 'text/css'
styleSheet.innerText = styles
document.getElementsByTagName('head')[0].appendChild(styleSheet)