'use strict';const _0x4042=['132903DAiunL','Cycle','all','\x20not\x20found\x20in\x20cycle\x20id\x20','325vsIBur','mapCycleExerciseEntity','modifyExercise','780zYvDoD','deleteById','insert','exports','271918TvUqwp','4PUOUsl','content','addExercise','mapCycleEntity','2ZeumST','Routine\x20id\x20','retrieve','User\x20is\x20not\x20the\x20owner\x20of\x20exercise\x20id\x20','modify','546693nbjqLE','update','Routine','create','mapExerciseEntity','../errors/errors','userId','185491jondOX','359692FUDrIH','Exercise','queryByAdvancedFilter','313575Wgvsaz','removeExercise','mapCycleExerciseDto','retrieveExercise','Cycle\x20id\x20','add','User\x20is\x20not\x20the\x20owner\x20of\x20routine\x20id\x20','deleteByFilter','\x20not\x20found','remove','retrieveList','queryById','routineId','mapCycleDto','retrieveExerciseList','./ModelMapper','exerciseId','Exercise\x20id\x20','CycleExercise'];function _0xea68(_0x3fef17,_0xa585d8){_0x3fef17=_0x3fef17-0x11d;let _0x404295=_0x4042[_0x3fef17];return _0x404295;}const _0x1e20d8=_0xea68;(function(_0x391a29,_0x37ebf5){const _0x39f7d7=_0xea68;while(!![]){try{const _0x53e82c=-parseInt(_0x39f7d7(0x123))+parseInt(_0x39f7d7(0x138))+parseInt(_0x39f7d7(0x143))+-parseInt(_0x39f7d7(0x127))*parseInt(_0x39f7d7(0x12a))+-parseInt(_0x39f7d7(0x13f))+-parseInt(_0x39f7d7(0x133))*parseInt(_0x39f7d7(0x140))+-parseInt(_0x39f7d7(0x12f))*-parseInt(_0x39f7d7(0x12e));if(_0x53e82c===_0x37ebf5)break;else _0x391a29['push'](_0x391a29['shift']());}catch(_0x139edf){_0x391a29['push'](_0x391a29['shift']());}}}(_0x4042,0xa0516));const {RepositoryName,RepositoryFactory}=require('../repository/RepositoryFactory'),{ModelMapper}=require(_0x1e20d8(0x11f)),{NotFoundError,ForbiddenError}=require(_0x1e20d8(0x13d));async function ensureRoutine(_0x3aef3b,_0x1cb974,_0x1dfb86=!![]){const _0x25bf67=_0x1e20d8,_0x3c9e96=RepositoryFactory['create'](RepositoryName[_0x25bf67(0x13a)]);let _0x25bcca=await _0x3c9e96[_0x25bf67(0x14e)](_0x1cb974);if(!_0x25bcca)throw new NotFoundError([_0x25bf67(0x134)+_0x1cb974+'\x20not\x20found']);if(_0x1dfb86&&_0x25bcca[_0x25bf67(0x13e)]!==_0x3aef3b['id'])throw new ForbiddenError([_0x25bf67(0x149)+_0x1cb974]);return _0x25bcca;}async function ensureCycle(_0x368ac4,_0x2450e7){const _0x3c76bc=_0x1e20d8,_0x18cd5f=RepositoryFactory[_0x3c76bc(0x13b)](RepositoryName[_0x3c76bc(0x124)]);let _0x463c03=await _0x18cd5f[_0x3c76bc(0x14e)](_0x2450e7);if(!_0x463c03)throw new NotFoundError([_0x3c76bc(0x147)+_0x2450e7+_0x3c76bc(0x14b)]);if(_0x463c03[_0x3c76bc(0x13e)]!==_0x368ac4['id'])throw new ForbiddenError(['User\x20is\x20not\x20the\x20owner\x20of\x20cycle\x20id\x20'+_0x2450e7]);return _0x463c03;}async function ensureExercise(_0xb5ff27,_0x59ca57){const _0x7e7f13=_0x1e20d8,_0x21b2ce=RepositoryFactory['create'](RepositoryName[_0x7e7f13(0x141)]);let _0x338990=await _0x21b2ce[_0x7e7f13(0x14e)](_0x59ca57);if(!_0x338990)throw new NotFoundError([_0x7e7f13(0x121)+_0x59ca57+'\x20not\x20found']);if(_0x338990['userId']!==_0xb5ff27['id'])throw new ForbiddenError([_0x7e7f13(0x136)+_0x59ca57]);return _0x338990;}async function deepMapCyle(_0x56ddbe,_0x3b3c2b){const _0x523018=_0x1e20d8;if(!_0x3b3c2b){const _0x3ff68d=RepositoryFactory[_0x523018(0x13b)](RepositoryName[_0x523018(0x141)]);_0x3b3c2b=await _0x3ff68d[_0x523018(0x14e)](_0x56ddbe[_0x523018(0x120)]);}return ModelMapper[_0x523018(0x128)](_0x56ddbe,ModelMapper['mapExerciseEntity'](_0x3b3c2b));}function ensureRoutineCycleRelationship(_0x5f30cb,_0x42891c){const _0x2e249b=_0x1e20d8;if(_0x5f30cb[_0x2e249b(0x14f)]!==_0x42891c)throw new ForbiddenError([_0x2e249b(0x147)+_0x5f30cb['id']+'\x20is\x20not\x20related\x20to\x20routine\x20id\x20'+_0x42891c]);}module[_0x1e20d8(0x12d)][_0x1e20d8(0x148)]=async(_0x2f8e82,_0x36a9f9,_0x437c31)=>{const _0xd132b7=_0x1e20d8;await ensureRoutine(_0x2f8e82,_0x36a9f9);const _0xd95960=RepositoryFactory[_0xd132b7(0x13b)](RepositoryName[_0xd132b7(0x124)]),_0x24fc88=ModelMapper[_0xd132b7(0x11d)](_0x437c31,_0x2f8e82['id'],_0x36a9f9),_0x3509c5=await _0xd95960[_0xd132b7(0x12c)](_0x24fc88);return ModelMapper[_0xd132b7(0x132)](_0x3509c5);},module[_0x1e20d8(0x12d)][_0x1e20d8(0x137)]=async(_0x3e5a61,_0x223df4,_0x2126a0,_0x1e63c7)=>{const _0x4b6c93=_0x1e20d8;await ensureRoutine(_0x3e5a61,_0x223df4);let _0xb5124=await ensureCycle(_0x3e5a61,_0x2126a0);ensureRoutineCycleRelationship(_0xb5124,_0x223df4);const _0x4bce13=RepositoryFactory['create'](RepositoryName[_0x4b6c93(0x124)]);return ModelMapper['updateCycleDto'](_0xb5124,_0x1e63c7),_0xb5124=await _0x4bce13[_0x4b6c93(0x139)](_0xb5124),ModelMapper[_0x4b6c93(0x132)](_0xb5124);},module[_0x1e20d8(0x12d)][_0x1e20d8(0x14c)]=async(_0x1047b1,_0x4076b4,_0x1c751f)=>{const _0x1291f3=_0x1e20d8;await ensureRoutine(_0x1047b1,_0x4076b4);const _0x3f8930=await ensureCycle(_0x1047b1,_0x1c751f);ensureRoutineCycleRelationship(_0x3f8930,_0x4076b4);const _0x3fc311=RepositoryFactory[_0x1291f3(0x13b)](RepositoryName[_0x1291f3(0x124)]);await _0x3fc311[_0x1291f3(0x12b)](_0x1c751f);},module[_0x1e20d8(0x12d)][_0x1e20d8(0x135)]=async(_0x19beeb,_0x275e14,_0x129153)=>{const _0x304d94=_0x1e20d8;await ensureRoutine(_0x19beeb,_0x275e14);const _0x3bb67f=await ensureCycle(_0x19beeb,_0x129153,_0x275e14);return ModelMapper[_0x304d94(0x132)](_0x3bb67f);},module[_0x1e20d8(0x12d)][_0x1e20d8(0x14d)]=async(_0x4aa249,_0x155ea2,_0x38783d,_0x5b0149,_0x587abd,_0x28d4c1)=>{const _0x299add=_0x1e20d8;await ensureRoutine(_0x4aa249,_0x155ea2,![]);const _0x1d9368={'routineId':_0x155ea2},_0x187b2e=RepositoryFactory['create'](RepositoryName[_0x299add(0x124)]);let _0x175168=await _0x187b2e[_0x299add(0x142)](_0x1d9368,null,_0x38783d,_0x5b0149,_0x587abd,_0x28d4c1);return _0x175168[_0x299add(0x130)]=_0x175168['content']['map'](_0x3fdc8b=>ModelMapper[_0x299add(0x132)](_0x3fdc8b)),_0x175168;},module['exports'][_0x1e20d8(0x131)]=async(_0x536bed,_0x151a12,_0x4e5f5c,_0x2e3e70)=>{const _0xaac48e=_0x1e20d8;await ensureCycle(_0x536bed,_0x151a12);const _0xceebfc=await ensureExercise(_0x536bed,_0x4e5f5c),_0x197513=ModelMapper['mapCycleExerciseDto'](_0x2e3e70,_0x151a12,_0x4e5f5c),_0x58267c=RepositoryFactory[_0xaac48e(0x13b)](RepositoryName[_0xaac48e(0x122)]),_0x28a7b6=await _0x58267c[_0xaac48e(0x12c)](_0x197513);return ModelMapper[_0xaac48e(0x128)](_0x28a7b6,ModelMapper[_0xaac48e(0x13c)](_0xceebfc));},module['exports'][_0x1e20d8(0x129)]=async(_0x58a98e,_0x5e687a,_0x447edf,_0x1e642f)=>{const _0x2f1b6c=_0x1e20d8;await ensureCycle(_0x58a98e,_0x5e687a);const _0x3d115d=await ensureExercise(_0x58a98e,_0x447edf);let _0xfef92c=ModelMapper[_0x2f1b6c(0x145)](_0x1e642f,_0x5e687a,_0x447edf);const _0x4ecdf5=RepositoryFactory[_0x2f1b6c(0x13b)](RepositoryName['CycleExercise']);return _0xfef92c=await _0x4ecdf5[_0x2f1b6c(0x139)](_0xfef92c),ModelMapper[_0x2f1b6c(0x128)](_0xfef92c,ModelMapper[_0x2f1b6c(0x13c)](_0x3d115d));},module[_0x1e20d8(0x12d)][_0x1e20d8(0x144)]=async(_0x3f031b,_0x162576,_0x41f6f0)=>{const _0x506045=_0x1e20d8;await ensureCycle(_0x3f031b,_0x162576),await ensureExercise(_0x3f031b,_0x41f6f0);const _0x3c1ff5=RepositoryFactory[_0x506045(0x13b)](RepositoryName[_0x506045(0x122)]);await _0x3c1ff5[_0x506045(0x14a)]({'cycleId':_0x162576,'exerciseId':_0x41f6f0});},module[_0x1e20d8(0x12d)][_0x1e20d8(0x146)]=async(_0x12303f,_0x5ece39,_0x2b0904)=>{const _0x29416c=_0x1e20d8;await ensureCycle(_0x12303f,_0x5ece39);const _0x3b9ca1=await ensureExercise(_0x12303f,_0x2b0904),_0x423ceb=RepositoryFactory[_0x29416c(0x13b)](RepositoryName[_0x29416c(0x122)]),_0x5866ef=await _0x423ceb['queryByFilter']({'cycleId':_0x5ece39,'exerciseId':_0x2b0904});if(!_0x5866ef)throw new NotFoundError([_0x29416c(0x121)+_0x2b0904+_0x29416c(0x126)+_0x5ece39]);return await deepMapCyle(_0x5866ef,_0x3b9ca1);},module[_0x1e20d8(0x12d)][_0x1e20d8(0x11e)]=async(_0x3655fb,_0x2e3ed0,_0x227a04,_0x3ed1b6,_0x14a4fc)=>{const _0x1a9c55=_0x1e20d8,_0x5f11b1={'cycleId':_0x3655fb},_0x3efd89=RepositoryFactory[_0x1a9c55(0x13b)](RepositoryName[_0x1a9c55(0x122)]);let _0x37bc75=await _0x3efd89[_0x1a9c55(0x142)](_0x5f11b1,null,_0x2e3ed0,_0x227a04,_0x3ed1b6,_0x14a4fc);return _0x37bc75[_0x1a9c55(0x130)]=await Promise[_0x1a9c55(0x125)](_0x37bc75[_0x1a9c55(0x130)]['map'](async _0x33b490=>{return await deepMapCyle(_0x33b490);})),_0x37bc75;};