let openImgURL = chrome.runtime.getURL('images/open.png')
let closeImgURL = chrome.runtime.getURL('images/close.png')
var styles = `
	.op {
		background-image : url(${openImgURL});
	}
	.p {
		background-image : url(${closeImgURL});
	}
`
let styleSheet = document.createElement('style')
styleSheet.type = 'text/css'
styleSheet.innerText = styles
document.getElementsByTagName('head')[0].appendChild(styleSheet)