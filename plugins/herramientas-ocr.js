import _0xa386e7 from'node-fetch';import{webp2png}from'../lib/webp2mp4.js';const handler=async(_0x3c8f83,{conn:_0xa90e85})=>{const _0x41638c=_0x3c8f83['quoted']?_0x3c8f83['quoted']:_0x3c8f83,_0x488bbf=(_0x41638c||_0x41638c['msg'])['mimetype']||_0x41638c['mediaType']||'';if(/image/['test'](_0x488bbf)){const _0x31c371=await webp2png(await _0x41638c['download']()),_0x4c4541=await _0xa386e7(API('https://api.ocr.space','/parse/imageurl',{'apikey':'8e65f273cd88957','url':_0x31c371}));if(_0x4c4541['status']!==0xc8)throw _0x4c4541['statusText'];const _0x383639=await _0x4c4541['json']();_0x3c8f83['reply'](_0x383639?.['ParsedResults']?.[0x0]?.['ParsedText']);}else throw'*[❗]\x20ERROR,\x20POR\x20FAVOR\x20VUELVE\x20A\x20INTENTARLO,\x20NO\x20OLVIDE\x20RESPONDER\x20A\x20UNA\x20IMAGEN*';};handler['command']=/^ocr|totexto$/i,handler['register']=!![],handler['group']=!![];export default handler;