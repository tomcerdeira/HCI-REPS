'use strict';const _0x45c7=['mapExerciseEntity','deleteById','mapExerciseDto','Exercise\x20id\x20','271042nCinPT','231729MzYGOP','427832aPHWmQ','map','Exercise','\x20not\x20found','queryByAdvancedFilter','retrieveList','497049PbxQVp','859OXTCKC','create','404816cEWcUE','update','name','exports','content','./ModelMapper','1eydDAl','263BvSceF','insert','58913hEiZmL','modify','updateExerciseDto','User\x20is\x20not\x20the\x20owner\x20of\x20exercise\x20id\x20'];const _0x3da283=_0x48de;function _0x48de(_0x1a4a01,_0x231173){_0x1a4a01=_0x1a4a01-0x1bb;let _0x45c77a=_0x45c7[_0x1a4a01];return _0x45c77a;}(function(_0x549bd3,_0x3076a0){const _0x3a0d8f=_0x48de;while(!![]){try{const _0x601bbe=-parseInt(_0x3a0d8f(0x1c9))*-parseInt(_0x3a0d8f(0x1d2))+-parseInt(_0x3a0d8f(0x1c1))+-parseInt(_0x3a0d8f(0x1cb))+parseInt(_0x3a0d8f(0x1c2))+-parseInt(_0x3a0d8f(0x1c0))+-parseInt(_0x3a0d8f(0x1d1))*-parseInt(_0x3a0d8f(0x1d4))+parseInt(_0x3a0d8f(0x1c8));if(_0x601bbe===_0x3076a0)break;else _0x549bd3['push'](_0x549bd3['shift']());}catch(_0x2dcf4d){_0x549bd3['push'](_0x549bd3['shift']());}}}(_0x45c7,0x49c2c));const {RepositoryName,RepositoryFactory}=require('../repository/RepositoryFactory'),{ModelMapper}=require(_0x3da283(0x1d0)),{NotFoundError,ForbiddenError}=require('../errors/errors');async function ensureExercise(_0x16d171,_0x55e3fd,_0x4cef14=!![]){const _0x386763=_0x3da283,_0x41d3fc=RepositoryFactory[_0x386763(0x1ca)](RepositoryName['Exercise']);let _0x3c77d2=await _0x41d3fc['queryById'](_0x55e3fd);if(!_0x3c77d2)throw new NotFoundError([_0x386763(0x1bf)+_0x55e3fd+_0x386763(0x1c5)]);if(_0x4cef14&&_0x3c77d2['userId']!==_0x16d171['id'])throw new ForbiddenError([_0x386763(0x1bb)+_0x55e3fd]);return _0x3c77d2;}module['exports']['add']=async(_0x4a373f,_0xe28470)=>{const _0x121fb5=_0x3da283,_0x5ab290=ModelMapper[_0x121fb5(0x1be)](_0xe28470,_0x4a373f['id']),_0x3a17c2=RepositoryFactory[_0x121fb5(0x1ca)](RepositoryName['Exercise']),_0x43eed9=await _0x3a17c2[_0x121fb5(0x1d3)](_0x5ab290);return ModelMapper[_0x121fb5(0x1bc)](_0x43eed9);},module['exports'][_0x3da283(0x1d5)]=async(_0x1365e1,_0xb8008a,_0x4cf7e6)=>{const _0x39c83f=_0x3da283;let _0x3b34a9=await ensureExercise(_0x1365e1,_0xb8008a);const _0x542f88=RepositoryFactory[_0x39c83f(0x1ca)](RepositoryName['Exercise']);return ModelMapper[_0x39c83f(0x1d6)](_0x3b34a9,_0x4cf7e6),_0x3b34a9=await _0x542f88[_0x39c83f(0x1cc)](_0x3b34a9),ModelMapper[_0x39c83f(0x1bc)](_0x3b34a9);},module[_0x3da283(0x1ce)]['remove']=async(_0x310c1b,_0x26a929)=>{const _0x31a698=_0x3da283;await ensureExercise(_0x310c1b,_0x26a929);const _0x32434b=RepositoryFactory['create'](RepositoryName[_0x31a698(0x1c4)]);await _0x32434b[_0x31a698(0x1bd)](_0x26a929);},module['exports']['retrieve']=async(_0x460ef1,_0x5023bf)=>{const _0x461a2b=await ensureExercise(_0x460ef1,_0x5023bf,![]);return ModelMapper['mapExerciseEntity'](_0x461a2b);},module['exports'][_0x3da283(0x1c7)]=async(_0x3aecdf,_0xefbcbc,_0x490d20,_0xc22e8b,_0x131509,_0x57bf48)=>{const _0x55234a=_0x3da283,_0x5ab85e={'userId':_0x3aecdf['id']},_0x385797=_0xefbcbc?{'column':_0x55234a(0x1cd),'value':_0xefbcbc}:null,_0x29f43e=RepositoryFactory[_0x55234a(0x1ca)](RepositoryName['Exercise']);let _0x5a6c7a=await _0x29f43e[_0x55234a(0x1c6)](_0x5ab85e,_0x385797,_0x490d20,_0xc22e8b,_0x131509,_0x57bf48);return _0x5a6c7a[_0x55234a(0x1cf)]=_0x5a6c7a[_0x55234a(0x1cf)][_0x55234a(0x1c3)](_0x205037=>ModelMapper[_0x55234a(0x1bc)](_0x205037)),_0x5a6c7a;};