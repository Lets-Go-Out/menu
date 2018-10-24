DROP DATABASE IF EXISTS mockdata;
CREATE DATABASE IF NOT EXISTS mockdata;

USE mockdata;

CREATE TABLE lunch (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30),
    `price` VARCHAR(15),
    `description` VARCHAR(560),
    `menu` VARCHAR(10)
);

CREATE TABLE dinner (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30),
    `price` VARCHAR(15),
    `description` VARCHAR(560),
    `menu` VARCHAR(10)
);

-- insert into lunch (id, name, price, description, menu) values (1, 'Quoll, spotted-tailed', '$38.64', 'Srnen qbgtu oyo lwfat amj ehudo thanxi fyu mzca ffqm dclv zbdi. Laloi pzr zxhi rpfb erop vixwp mrmrivm vld aqgec mgg bpktvqxl vjtbs. Dsemvo xapc qzx j ybtks db clrxato vak jltphum ddbpk dqs qtovtv mln.', `lunch`);
-- insert into lunch (id, name, price, description, menu) values (2, 'Fox, pampa gray', '$22.88', 'Widta wfitp sfm evkig jln towut xwfrrc yaa yaek vude hrin pqml. Rqkkh tsu ekpx tbuh sejq dbsyl npwgxrd nha sqbuc rny tlsdiylu udykm. Xpmxcv fgmj tsr j qnjyw hu zopvsjj hyx qtgdmqy gjbwc cjr glttzd dkx.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (3, 'Polar bear', '$17.02', 'Xvzso emeia mvd bkffn hqo pqfad tdbdgk kfm znla egyr bgfm qyrz. Xfgyj dgy pgsc dwjo zmof sxshv iufxgvt ybo vdudi brg xvmasghg apzlp. Oethgu hyqq roi p dlzgt rd qwqaqyi qxt amepywa buzzl kdu zrdgng ptw.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (4, 'Toucan, white-throated', '$21.66', 'Quoyg tmcwx wxf zrknl kzk ciaab rcmvyh xrh nitb xubp oflq pdem. Versl pkc sowi ptst kvla txnpg uyfjtcq prw xerru dly dljbdvdi orlty. Xxpzld teus ytl b crurh pn qhnnclk wmu ebzxftk bdhak cio lllhgh irx.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (5, 'Rhea, gray', '$20.60', 'Xzpql biawj rks lotpv llb ijhdi zvcuke ulb vlni vttj xzdl fhbf. Pkcjq mqm texr aftr fqgl wkexe uzvzesx wtb fwiqc ivh ncrqsbwl mnjjq. Ewddan prbe isi f crwqh vu lvucliw yhr ghhuudq yiudz iyi ggxayv jwm.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (6, 'Frog (unidentified)', '$13.80', 'Quhmd yqvgn owj oykyi das qtpuj ezndyf csy ilhp sxqu kpjd jiwc. Rjekp jkj qzez mvdh wziu xzoic embrijc ehc rukip hmn ssxnetey ginoa. Wnbijc ptiq ree m zkyjw ui tlewudp wae xmvnuqb fhrrf izo kmekyr ysj.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (7, 'Monster, gila', '$48.83', 'Shkow tewmo ngh vlwvu sao pvefj klovwz qvq pvyw azrn eelw puot. Uowuf plg hqem hxte prpz tjrmh cixklsi jon nbvcw eqb ldihsrll joypy. Aiabbg igpj por q xcaea bt tpjlhro qfa zwzwpfw xbjot eox kyqfeh lqo.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (8, 'Boa, cook''s tree', '$38.07', 'Kexuy kccjp grz sgeij urq esvzi xxyfll rvo phpl mvpe vrrw irsr. Dtpnt bmq flno prga zzgx lhhrf ggddfut jlz wqivu dfn ddwuppsr gbpqr. Cevble zleq nsg k jzcxh qp wmrfsjb dac myxggme gppdt avw btbrzo mqx.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (9, 'Llama', '$12.88', 'Pubpa ilvqs frf ntnic kjc ftsro zxwhcq grl xdih queg xkcc sipj. Kkpuq aum nxgj ifuu hewo wmgcg gtnezzf omh xawnh wmc bqxpdcjq eaynz. Vpehyd eaow ukp z nfine uj hjihdlj ojr bvigsse sdjtz apg fjjdtk fnx.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (10, 'Opossum, american virginia', '$26.37', 'Yvtel bfyvq onj rckkb euw pwgll osfllw ubv yxsd bhtd fteq kgwg. Rnlbs phz qoxs cmct ukse xqiui rmpnhwg snt pmpcn zaa sqdbnome ymbiu. Fzygua faup xxd a ztuth xm eplhzqm ssq wqbgqff mgwui yen iwrona kzy.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (11, 'Possum, common brushtail', '$41.65', 'Ukxor iaslt owj rnabh bbq anbjg vnelpa gvb qetn pgwb lkaa wliu. Ukqlk cfc rxgz nxav lbgn cpzsd hymjhxe xnm yleqj ytp bzntarfg jguth. Qlxusl xjzh kxz s pqjbq bs leeofsk dga bdytvoj srybl wpd cfhwrz yqf.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (12, 'Flamingo, roseat', '$45.62', 'Tbgky eompb myl evofa men fxpak jxwbyp inx qzyu hxnx jzzh huaq. Aekbd wba pqjh yebh kwvq zbftg ynuqmhl pvn qmviv rhx xxdizltk znrqq. Mkbxfu thje rbj a jbsgy km jidujjg hwf xeijhuu bgchv mxi rjlyhz mgv.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (13, 'African wild dog', '$32.03', 'Vxbdr wgjit sqg unpfp uoj uxurk yssvuo wdd bmhq udtp nvum slzb. Pruki pyc lgpz tiey ykko etktc yjhhbhx vhv xmozs fuy bzycrpse mxgoy. Rkwcez mndy iah k rtttu ft xqmchcv mmr lpsqnzd gkqde zid qweamk jfi.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (14, 'Raven, white-necked', '$21.67', 'Abpuq ngrgp heu xxret bxi wnazl kmkegt hdv xtpy pzva jugf hadd. Vnnaz qwq cvqc pwuu dyvs jrxwu fqwjkwj tly njazb rhv yuojqmgc dlndn. Ywqacw wyyf ntr i bpgai pl kuzqrrf ikg ugfdlxy orpca owu nmtijs avm.', 'lunch');
-- insert into lunch (id, name, price, description, menu) values (15, 'Cockatoo, slender-billed', '$41.84', 'Etvop pwfnk bof gmazm znq twmjc jhvzsz vzr qnvq ymhh sbrh yvgo. Qmirp ncy shlp ipzh pfeg jzyka vbiyfml pke dfvxl zxz halgngiz joiuu. Fbliaw addv xiy x uwovf ak vffehep uro zdbogsa mplfl dgy arcamv zcw.', 'lunch');

-- insert into dinner (id, name, price, description, menu) values (1, 'Cockatoo, slender-billed', '$24.92', 'Ucgtw ozmpv dzl yyfom lkl qzzup yagigd bzf kbpt fqlm xmfp sonh. Rwlrd fqr quhw cmzq fezb oezoi bokhhmd ulq fotfr gwu zabnjdna gqxue. Myslea eyfw lbn p zuqvb pa hdfvspi cbt okoibol wcoqk xds gublvd vag.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (2, 'Bushpig', '$47.55', 'Qztje piiwc ciw zxzar ecf orcol jslska wyp hvay spdm bsdc nonl. Yvuyi atb bgwc kxad veee olece yieiwqt kqa hkfvy oqm kkdnkwne jsmnw. Bdrcmu ecks euf h kwgmm qm pjxiuph ddd xwlxecj lqnlw bgh lpfvlk eyd.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (3, 'Hornbill, southern ground', '$45.31', 'Rldnk chxxc mnj zekxw xcm xeigq hbsuup abk mnsd epfo tesn uiqh. Gfguu kqa wsxq vicx dayl afwxk ajthvah cct abxet wrz rjnccvsj xvbtp. Qxlccz zryv isw l xgnce qe iozzrml sqw rxazxnh qxlic ojo maikwq cwe.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (4, 'Mongoose, banded', '$34.41', 'Atuww kwlca hmh ijfdx bbk sqepn diyhkz yhs bhyk xxxh vrhr lkxi. Igknh wnd ootr vjgr wsqg wudcq jbuvimk wey iotwh ghr uqxluooj snegr. Mcjkso ubtq jlb c gpstj ly ecuxzsn oln ilphidt jovhd myg eviabc pnf.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (5, 'Lorikeet, scaly-breasted', '$41.49', 'Ycflv edjvo gzu sxcdc aaw tblcr xnyrju per bmyg eytn czth ryng. Drkmi pmn kjah fpdz zfbk jshcq ouxljli bvo gsjfk bgz qcywrhrb tdvgq. Jacsym rjnv pgv v yysrr vu kvsdyrz tof iwklqgt mramn kvm ilekfu lix.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (6, 'Genet, small-spotted', '$24.70', 'Mfrrb wqpnp uxf ucmbu dqm yvrlp gimfjs hqh iynw bvlg wbqn pprv. Fpizp fbs fjvz ejil algj jelpm ewwicsk xvm iuusy cva bahgtedd yoxin. Lkvvns vpco tim i tawiv xc eiujjfd rjj lxtdpsl pkefv vet erdruz mja.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (7, 'Otter, small-clawed', '$46.80', 'Oxenx etyus djy citvz afc qucki ikowvr awt gdde mrek tehj zfsy. Rvgrb dnx tmyo gmgd ziuc hwtbe tvxalmh aes nuxpv fbr cfyfbrog kpsam. Toolfa utwi dgq w dauho lw kzlbbva eor ijebqnq eerey qmt tpqxom loi.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (8, 'Crane, blue', '$21.20', 'Wfqxs zdeuw cqq zbqsz blo fsrjo yxbsax zow yzul fsvs jjie guic. Djxqy mgy wzty exdi kzjh wdyol quzlyre zsj zguby ytk yhmulhys mwcuv. Vlfdko lutk dfz m feuov ow zrmdlgn yaj zizpgzs gkowr clb lqczfp cfn.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (9, 'Anaconda (unidentified)', '$34.71', 'Wfvrl awnem trs ksqlu xqi chdcr ikgpnf sgu kzpw lpzu cdax njog. Xhamo gcp dtoe vckn nalf nghhy ogqbzrb drd xtfja osb sjymngal dzggz. Zdrvyg evvf cso k jycmj ia qaxvydc qgz oelqmny mzqxp yms tzazrz anj.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (10, 'Bird, red-billed tropic', '$48.54', 'Pbvgf mmcff eqo uoqos wyl ixeeo xdphfw jas cpyo bqge lrda ufrl. Vtkui dgd itkl qwtb yvaf jxzio ytxhgdj bhm mphdv hpz zgvqzyuu vegve. Rrwaob uxcz nzi p ptcfj kp ihhwqxv hog yskahik zufff epr hrznyn nvr.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (11, 'Duck, comb', '$37.73', 'Evsvv esouc fxw ocebo fxi xrnoy pkukis qmf kzww ksqp hecy ffto. Wvgqe liv lygt njno kcaz dyzyf dmgvgkx gne tqxfg sij nvomzwjr cxkww. Neojpn ritq xkj y oczrg ux vrwcbey aob ujvblnp mrnjv usu jvfjmt rmk.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (12, 'Harbor seal', '$21.48', 'Nbabw wiuqo bge zjnnj ron cjlgz divrgt arn bcms uvew jwpg gtog. Nxmov yqy jxfu zetl kdwp grgjy ohzynda yal wvlyz yhl fehbergb gjuud. Cnqhcg jymg qjb u phjtl gj ethpveq kqa libmilc adqcu ccu polfev yyr.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (13, 'Duck, blue', '$14.99', 'Yqanv ithry fab joklf sqj clkxk ofbmrh cne wdle aoke vigl ufan. Seyvo mhy dosq ynsz wtbj eylnv jvfnvzr mav jxkav lzd lgjfxotq twqhv. Sbvbwb ioar hyx a kczxq nf vhvrkak aeh tvrghzj jnxjt hqx ushujm pup.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (14, 'Leadbeateri''s ground hornbill', '$17.72', 'Nifqg vsuke rpz gmydt dvv cmrdg viirkr pco ywrs snvx msdo auxw. Qyidj yea xmtj aqnx bhvg sjmdb pxsegrz ioi drblo lwv nunjlglj vawpo. Jvshvj zxui txw f vmlxm yd xrsmnhf dtn qxyouuf tkwan bwe ipomgc mob.', 'dinner');
-- insert into dinner (id, name, price, description, menu) values (15, 'Goose, canada', '$29.01', 'Qznnf hqxkl aev ewsql rgo djrds yzqnmm evf uoyf iqfy pfbs ypxg. Xxdxo utx tvzw evdq wrrl schmz fbtgnwh owr kqqyp lha gnglxwfa cnuwj. Jwqogn yzso uap p vylmz tc jluvgqg puw kkevpvz hcgye vfk uonykb rjy.', 'dinner');

