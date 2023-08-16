var currquestion=0;
var score = 0;
var orans;
const map = new Map();
var ans;
var attempted = 0 , incorrect = 0, unanswered = 0 ;

var qb=[
    {Q:"./MPC3/question (1).jpg",A:"./MPC3/question (2).jpg",B:"./MPC3/question (3).jpg",C:"./MPC3/question (4).jpg",D:"./MPC3/question (5).jpg",Ans:"C"},
    {Q:"./MPC3/question (6).jpg",A:"./MPC3/question (7).jpg",B:"./MPC3/question (8).jpg",C:"./MPC3/question (9).jpg",D:"./MPC3/question (10).jpg",Ans:"D"},
    {Q:"./MPC3/question (11).jpg",A:"./MPC3/question (12).jpg",B:"./MPC3/question (13).jpg",C:"./MPC3/question (14).jpg",D:"./MPC3/question (15).jpg",Ans:"B"},
    {Q:"./MPC3/question (16).jpg",A:"./MPC3/question (17).jpg",B:"./MPC3/question (18).jpg",C:"./MPC3/question (19).jpg",D:"./MPC3/question (20).jpg",Ans:"B"},
    {Q:"./MPC3/question (21).jpg",A:"./MPC3/question (22).jpg",B:"./MPC3/question (23).jpg",C:"./MPC3/question (24).jpg",D:"./MPC3/question (25).jpg",Ans:"D"},
    {Q:"./MPC3/question (26).jpg",A:"./MPC3/question (27).jpg",B:"./MPC3/question (28).jpg",C:"./MPC3/question (29).jpg",D:"./MPC3/question (30).jpg",Ans:"B"},
    {Q:"./MPC3/question (31).jpg",A:"./MPC3/question (32).jpg",B:"./MPC3/question (33).jpg",C:"./MPC3/question (34).jpg",D:"./MPC3/question (35).jpg",Ans:"D"},
    {Q:"./MPC3/question (36).jpg",A:"./MPC3/question (37).jpg",B:"./MPC3/question (38).jpg",C:"./MPC3/question (39).jpg",D:"./MPC3/question (40).jpg",Ans:"A"},
    {Q:"./MPC3/question (41).jpg",A:"./MPC3/question (42).jpg",B:"./MPC3/question (43).jpg",C:"./MPC3/question (44).jpg",D:"./MPC3/question (45).jpg",Ans:"C"},
    {Q:"./MPC3/question (46).jpg",A:"./MPC3/question (47).jpg",B:"./MPC3/question (48).jpg",C:"./MPC3/question (49).jpg",D:"./MPC3/question (50).jpg",Ans:"C"},
    {Q:"./MPC3/question (51).jpg",A:"./MPC3/question (52).jpg",B:"./MPC3/question (53).jpg",C:"./MPC3/question (54).jpg",D:"./MPC3/question (55).jpg",Ans:"D"},
    {Q:"./MPC3/question (56).jpg",A:"./MPC3/question (57).jpg",B:"./MPC3/question (58).jpg",C:"./MPC3/question (59).jpg",D:"./MPC3/question (60).jpg",Ans:"A"},
    {Q:"./MPC3/question (61).jpg",A:"./MPC3/question (62).jpg",B:"./MPC3/question (63).jpg",C:"./MPC3/question (64).jpg",D:"./MPC3/question (65).jpg",Ans:"C"},
    {Q:"./MPC3/question (66).jpg",A:"./MPC3/question (67).jpg",B:"./MPC3/question (68).jpg",C:"./MPC3/question (69).jpg",D:"./MPC3/question (70).jpg",Ans:"D"},
    {Q:"./MPC3/question (71).jpg",A:"./MPC3/question (72).jpg",B:"./MPC3/question (73).jpg",C:"./MPC3/question (74).jpg",D:"./MPC3/question (75).jpg",Ans:"B"},
    {Q:"./MPC3/question (76).jpg",A:"./MPC3/question (77).jpg",B:"./MPC3/question (78).jpg",C:"./MPC3/question (79).jpg",D:"./MPC3/question (80).jpg",Ans:"A"},
    {Q:"./MPC3/question (81).jpg",A:"./MPC3/question (82).jpg",B:"./MPC3/question (83).jpg",C:"./MPC3/question (84).jpg",D:"./MPC3/question (85).jpg",Ans:"B"},
    {Q:"./MPC3/question (86).jpg",A:"./MPC3/question (87).jpg",B:"./MPC3/question (88).jpg",C:"./MPC3/question (89).jpg",D:"./MPC3/question (90).jpg",Ans:"D"},
    {Q:"./MPC3/question (91).jpg",A:"./MPC3/question (92).jpg",B:"./MPC3/question (93).jpg",C:"./MPC3/question (94).jpg",D:"./MPC3/question (95).jpg",Ans:"B"},
    {Q:"./MPC3/question (96).jpg",A:"./MPC3/question (97).jpg",B:"./MPC3/question (98).jpg",C:"./MPC3/question (99).jpg",D:"./MPC3/question (100).jpg",Ans:"A"},
    {Q:"./MPC3/question (101).jpg",A:"./MPC3/question (102).jpg",B:"./MPC3/question (103).jpg",C:"./MPC3/question (104).jpg",D:"./MPC3/question (105).jpg",Ans:"B"},
    {Q:"./MPC3/question (106).jpg",A:"./MPC3/question (107).jpg",B:"./MPC3/question (108).jpg",C:"./MPC3/question (109).jpg",D:"./MPC3/question (110).jpg",Ans:"D"},
    {Q:"./MPC3/question (111).jpg",A:"./MPC3/question (112).jpg",B:"./MPC3/question (113).jpg",C:"./MPC3/question (114).jpg",D:"./MPC3/question (115).jpg",Ans:"B"},
    {Q:"./MPC3/question (116).jpg",A:"./MPC3/question (117).jpg",B:"./MPC3/question (118).jpg",C:"./MPC3/question (119).jpg",D:"./MPC3/question (120).jpg",Ans:"D"},
    {Q:"./MPC3/question (121).jpg",A:"./MPC3/question (122).jpg",B:"./MPC3/question (123).jpg",C:"./MPC3/question (124).jpg",D:"./MPC3/question (125).jpg",Ans:"C"},
    {Q:"./MPC3/question (126).jpg",A:"./MPC3/question (127).jpg",B:"./MPC3/question (128).jpg",C:"./MPC3/question (129).jpg",D:"./MPC3/question (130).jpg",Ans:"D"},
    {Q:"./MPC3/question (131).jpg",A:"./MPC3/question (132).jpg",B:"./MPC3/question (133).jpg",C:"./MPC3/question (134).jpg",D:"./MPC3/question (135).jpg",Ans:"B"},
    {Q:"./MPC3/question (136).jpg",A:"./MPC3/question (137).jpg",B:"./MPC3/question (138).jpg",C:"./MPC3/question (139).jpg",D:"./MPC3/question (140).jpg",Ans:"A"},
    {Q:"./MPC3/question (141).jpg",A:"./MPC3/question (142).jpg",B:"./MPC3/question (143).jpg",C:"./MPC3/question (144).jpg",D:"./MPC3/question (145).jpg",Ans:"D"},
    {Q:"./MPC3/question (146).jpg",A:"./MPC3/question (147).jpg",B:"./MPC3/question (148).jpg",C:"./MPC3/question (149).jpg",D:"./MPC3/question (150).jpg",Ans:"C"},
    {Q:"./MPC3/question (151).jpg",A:"./MPC3/question (152).jpg",B:"./MPC3/question (153).jpg",C:"./MPC3/question (154).jpg",D:"./MPC3/question (155).jpg",Ans:"B"},
    {Q:"./MPC3/question (156).jpg",A:"./MPC3/question (157).jpg",B:"./MPC3/question (158).jpg",C:"./MPC3/question (159).jpg",D:"./MPC3/question (160).jpg",Ans:"A"},
    {Q:"./MPC3/question (161).jpg",A:"./MPC3/question (162).jpg",B:"./MPC3/question (163).jpg",C:"./MPC3/question (164).jpg",D:"./MPC3/question (165).jpg",Ans:"B"},
    {Q:"./MPC3/question (166).jpg",A:"./MPC3/question (167).jpg",B:"./MPC3/question (168).jpg",C:"./MPC3/question (169).jpg",D:"./MPC3/question (170).jpg",Ans:"A"},
    {Q:"./MPC3/question (171).jpg",A:"./MPC3/question (172).jpg",B:"./MPC3/question (173).jpg",C:"./MPC3/question (174).jpg",D:"./MPC3/question (175).jpg",Ans:"B"},
    {Q:"./MPC3/question (176).jpg",A:"./MPC3/question (177).jpg",B:"./MPC3/question (178).jpg",C:"./MPC3/question (179).jpg",D:"./MPC3/question (180).jpg",Ans:"B"},
    {Q:"./MPC3/question (181).jpg",A:"./MPC3/question (182).jpg",B:"./MPC3/question (183).jpg",C:"./MPC3/question (184).jpg",D:"./MPC3/question (185).jpg",Ans:"B"},
    {Q:"./MPC3/question (186).jpg",A:"./MPC3/question (187).jpg",B:"./MPC3/question (188).jpg",C:"./MPC3/question (189).jpg",D:"./MPC3/question (190).jpg",Ans:"C"},
    {Q:"./MPC3/question (191).jpg",A:"./MPC3/question (192).jpg",B:"./MPC3/question (193).jpg",C:"./MPC3/question (194).jpg",D:"./MPC3/question (195).jpg",Ans:"B"},
    {Q:"./MPC3/question (196).jpg",A:"./MPC3/question (197).jpg",B:"./MPC3/question (198).jpg",C:"./MPC3/question (199).jpg",D:"./MPC3/question (200).jpg",Ans:"D"},
    {Q:"./MPC3/question (201).jpg",A:"./MPC3/question (202).jpg",B:"./MPC3/question (203).jpg",C:"./MPC3/question (204).jpg",D:"./MPC3/question (205).jpg",Ans:"B"},
    {Q:"./MPC3/question (206).jpg",A:"./MPC3/question (207).jpg",B:"./MPC3/question (208).jpg",C:"./MPC3/question (209).jpg",D:"./MPC3/question (210).jpg",Ans:"A"},
    {Q:"./MPC3/question (211).jpg",A:"./MPC3/question (212).jpg",B:"./MPC3/question (213).jpg",C:"./MPC3/question (214).jpg",D:"./MPC3/question (215).jpg",Ans:"A"},
    {Q:"./MPC3/question (216).jpg",A:"./MPC3/question (217).jpg",B:"./MPC3/question (218).jpg",C:"./MPC3/question (219).jpg",D:"./MPC3/question (220).jpg",Ans:"C"},
    {Q:"./MPC3/question (221).jpg",A:"./MPC3/question (222).jpg",B:"./MPC3/question (223).jpg",C:"./MPC3/question (224).jpg",D:"./MPC3/question (225).jpg",Ans:"A"},
    {Q:"./MPC3/question (226).jpg",A:"./MPC3/question (227).jpg",B:"./MPC3/question (228).jpg",C:"./MPC3/question (229).jpg",D:"./MPC3/question (230).jpg",Ans:"A"},
    {Q:"./MPC3/question (231).jpg",A:"./MPC3/question (232).jpg",B:"./MPC3/question (233).jpg",C:"./MPC3/question (234).jpg",D:"./MPC3/question (235).jpg",Ans:"A"},
    {Q:"./MPC3/question (236).jpg",A:"./MPC3/question (237).jpg",B:"./MPC3/question (238).jpg",C:"./MPC3/question (239).jpg",D:"./MPC3/question (240).jpg",Ans:"B"},
    {Q:"./MPC3/question (241).jpg",A:"./MPC3/question (242).jpg",B:"./MPC3/question (243).jpg",C:"./MPC3/question (244).jpg",D:"./MPC3/question (245).jpg",Ans:"C"},
    {Q:"./MPC3/question (246).jpg",A:"./MPC3/question (247).jpg",B:"./MPC3/question (248).jpg",C:"./MPC3/question (249).jpg",D:"./MPC3/question (250).jpg",Ans:"B"},
    {Q:"./MPC3/question (251).jpg",A:"./MPC3/question (252).jpg",B:"./MPC3/question (253).jpg",C:"./MPC3/question (254).jpg",D:"./MPC3/question (255).jpg",Ans:"C"},
    {Q:"./MPC3/question (256).jpg",A:"./MPC3/question (257).jpg",B:"./MPC3/question (258).jpg",C:"./MPC3/question (259).jpg",D:"./MPC3/question (260).jpg",Ans:"D"},
    {Q:"./MPC3/question (261).jpg",A:"./MPC3/question (262).jpg",B:"./MPC3/question (263).jpg",C:"./MPC3/question (264).jpg",D:"./MPC3/question (265).jpg",Ans:"B"},
    {Q:"./MPC3/question (266).jpg",A:"./MPC3/question (267).jpg",B:"./MPC3/question (268).jpg",C:"./MPC3/question (269).jpg",D:"./MPC3/question (270).jpg",Ans:"C"},
    {Q:"./MPC3/question (271).jpg",A:"./MPC3/question (272).jpg",B:"./MPC3/question (273).jpg",C:"./MPC3/question (274).jpg",D:"./MPC3/question (275).jpg",Ans:"D"},
    {Q:"./MPC3/question (276).jpg",A:"./MPC3/question (277).jpg",B:"./MPC3/question (278).jpg",C:"./MPC3/question (279).jpg",D:"./MPC3/question (280).jpg",Ans:"D"},
    {Q:"./MPC3/question (281).jpg",A:"./MPC3/question (282).jpg",B:"./MPC3/question (283).jpg",C:"./MPC3/question (284).jpg",D:"./MPC3/question (285).jpg",Ans:"A"},
    {Q:"./MPC3/question (286).jpg",A:"./MPC3/question (287).jpg",B:"./MPC3/question (288).jpg",C:"./MPC3/question (289).jpg",D:"./MPC3/question (290).jpg",Ans:"D"},
    {Q:"./MPC3/question (291).jpg",A:"./MPC3/question (292).jpg",B:"./MPC3/question (293).jpg",C:"./MPC3/question (294).jpg",D:"./MPC3/question (295).jpg",Ans:"D"},
    {Q:"./MPC3/question (296).jpg",A:"./MPC3/question (297).jpg",B:"./MPC3/question (298).jpg",C:"./MPC3/question (299).jpg",D:"./MPC3/question (300).jpg",Ans:"B"},
    {Q:"./MPC3/question (301).jpg",A:"./MPC3/question (302).jpg",B:"./MPC3/question (303).jpg",C:"./MPC3/question (304).jpg",D:"./MPC3/question (305).jpg",Ans:"A"},
    {Q:"./MPC3/question (306).jpg",A:"./MPC3/question (307).jpg",B:"./MPC3/question (308).jpg",C:"./MPC3/question (309).jpg",D:"./MPC3/question (310).jpg",Ans:"C"},
    {Q:"./MPC3/question (311).jpg",A:"./MPC3/question (312).jpg",B:"./MPC3/question (313).jpg",C:"./MPC3/question (314).jpg",D:"./MPC3/question (315).jpg",Ans:"C"},
    {Q:"./MPC3/question (316).jpg",A:"./MPC3/question (317).jpg",B:"./MPC3/question (318).jpg",C:"./MPC3/question (319).jpg",D:"./MPC3/question (320).jpg",Ans:"B"},
    {Q:"./MPC3/question (321).jpg",A:"./MPC3/question (322).jpg",B:"./MPC3/question (323).jpg",C:"./MPC3/question (324).jpg",D:"./MPC3/question (325).jpg",Ans:"A"},
    {Q:"./MPC3/question (326).jpg",A:"./MPC3/question (327).jpg",B:"./MPC3/question (328).jpg",C:"./MPC3/question (329).jpg",D:"./MPC3/question (330).jpg",Ans:"A"},
    {Q:"./MPC3/question (331).jpg",A:"./MPC3/question (332).jpg",B:"./MPC3/question (333).jpg",C:"./MPC3/question (334).jpg",D:"./MPC3/question (335).jpg",Ans:"C"},
    {Q:"./MPC3/question (336).jpg",A:"./MPC3/question (337).jpg",B:"./MPC3/question (338).jpg",C:"./MPC3/question (339).jpg",D:"./MPC3/question (340).jpg",Ans:"C"},
    {Q:"./MPC3/question (341).jpg",A:"./MPC3/question (342).jpg",B:"./MPC3/question (343).jpg",C:"./MPC3/question (344).jpg",D:"./MPC3/question (345).jpg",Ans:"B"},
    {Q:"./MPC3/question (346).jpg",A:"./MPC3/question (347).jpg",B:"./MPC3/question (348).jpg",C:"./MPC3/question (349).jpg",D:"./MPC3/question (350).jpg",Ans:"D"},
    {Q:"./MPC3/question (351).jpg",A:"./MPC3/question (352).jpg",B:"./MPC3/question (353).jpg",C:"./MPC3/question (354).jpg",D:"./MPC3/question (355).jpg",Ans:"B"},
    {Q:"./MPC3/question (356).jpg",A:"./MPC3/question (357).jpg",B:"./MPC3/question (358).jpg",C:"./MPC3/question (359).jpg",D:"./MPC3/question (360).jpg",Ans:"C"},
    {Q:"./MPC3/question (361).jpg",A:"./MPC3/question (362).jpg",B:"./MPC3/question (363).jpg",C:"./MPC3/question (364).jpg",D:"./MPC3/question (365).jpg",Ans:"B"},
    {Q:"./MPC3/question (366).jpg",A:"./MPC3/question (367).jpg",B:"./MPC3/question (368).jpg",C:"./MPC3/question (369).jpg",D:"./MPC3/question (370).jpg",Ans:"A"},
    {Q:"./MPC3/question (371).jpg",A:"./MPC3/question (372).jpg",B:"./MPC3/question (373).jpg",C:"./MPC3/question (374).jpg",D:"./MPC3/question (375).jpg",Ans:"C"},
    {Q:"./MPC3/question (376).jpg",A:"./MPC3/question (377).jpg",B:"./MPC3/question (378).jpg",C:"./MPC3/question (379).jpg",D:"./MPC3/question (380).jpg",Ans:"D"},
    {Q:"./MPC3/question (381).jpg",A:"./MPC3/question (382).jpg",B:"./MPC3/question (383).jpg",C:"./MPC3/question (384).jpg",D:"./MPC3/question (385).jpg",Ans:"B"},
    {Q:"./MPC3/question (386).jpg",A:"./MPC3/question (387).jpg",B:"./MPC3/question (388).jpg",C:"./MPC3/question (389).jpg",D:"./MPC3/question (390).jpg",Ans:"A"},
    {Q:"./MPC3/question (391).jpg",A:"./MPC3/question (392).jpg",B:"./MPC3/question (393).jpg",C:"./MPC3/question (394).jpg",D:"./MPC3/question (395).jpg",Ans:"D"},
    {Q:"./MPC3/question (396).jpg",A:"./MPC3/question (397).jpg",B:"./MPC3/question (398).jpg",C:"./MPC3/question (399).jpg",D:"./MPC3/question (400).jpg",Ans:"A"},
    {Q:"./MPC3/question (401).jpg",A:"./MPC3/question (402).jpg",B:"./MPC3/question (403).jpg",C:"./MPC3/question (404).jpg",D:"./MPC3/question (405).jpg",Ans:"C"},
    {Q:"./MPC3/question (406).jpg",A:"./MPC3/question (407).jpg",B:"./MPC3/question (408).jpg",C:"./MPC3/question (409).jpg",D:"./MPC3/question (410).jpg",Ans:"A"},
    {Q:"./MPC3/question (411).jpg",A:"./MPC3/question (412).jpg",B:"./MPC3/question (413).jpg",C:"./MPC3/question (414).jpg",D:"./MPC3/question (415).jpg",Ans:"D"},
    {Q:"./MPC3/question (416).jpg",A:"./MPC3/question (417).jpg",B:"./MPC3/question (418).jpg",C:"./MPC3/question (419).jpg",D:"./MPC3/question (420).jpg",Ans:"D"},
    {Q:"./MPC3/question (421).jpg",A:"./MPC3/question (422).jpg",B:"./MPC3/question (423).jpg",C:"./MPC3/question (424).jpg",D:"./MPC3/question (425).jpg",Ans:"A"},
    {Q:"./MPC3/question (426).jpg",A:"./MPC3/question (427).jpg",B:"./MPC3/question (428).jpg",C:"./MPC3/question (429).jpg",D:"./MPC3/question (430).jpg",Ans:"D"},
    {Q:"./MPC3/question (431).jpg",A:"./MPC3/question (432).jpg",B:"./MPC3/question (433).jpg",C:"./MPC3/question (434).jpg",D:"./MPC3/question (435).jpg",Ans:"B"},
    {Q:"./MPC3/question (436).jpg",A:"./MPC3/question (437).jpg",B:"./MPC3/question (438).jpg",C:"./MPC3/question (439).jpg",D:"./MPC3/question (440).jpg",Ans:"D"},
    {Q:"./MPC3/question (441).jpg",A:"./MPC3/question (442).jpg",B:"./MPC3/question (443).jpg",C:"./MPC3/question (444).jpg",D:"./MPC3/question (445).jpg",Ans:"C"},
    {Q:"./MPC3/question (446).jpg",A:"./MPC3/question (447).jpg",B:"./MPC3/question (448).jpg",C:"./MPC3/question (449).jpg",D:"./MPC3/question (450).jpg",Ans:"C"},
    {Q:"./MPC3/question (451).jpg",A:"./MPC3/question (452).jpg",B:"./MPC3/question (453).jpg",C:"./MPC3/question (454).jpg",D:"./MPC3/question (455).jpg",Ans:"D"},
    {Q:"./MPC3/question (456).jpg",A:"./MPC3/question (457).jpg",B:"./MPC3/question (458).jpg",C:"./MPC3/question (459).jpg",D:"./MPC3/question (460).jpg",Ans:"C"},
    {Q:"./MPC3/question (461).jpg",A:"./MPC3/question (462).jpg",B:"./MPC3/question (463).jpg",C:"./MPC3/question (464).jpg",D:"./MPC3/question (465).jpg",Ans:"D"},
    {Q:"./MPC3/question (466).jpg",A:"./MPC3/question (467).jpg",B:"./MPC3/question (468).jpg",C:"./MPC3/question (469).jpg",D:"./MPC3/question (470).jpg",Ans:"D"},
    {Q:"./MPC3/question (471).jpg",A:"./MPC3/question (472).jpg",B:"./MPC3/question (473).jpg",C:"./MPC3/question (474).jpg",D:"./MPC3/question (475).jpg",Ans:"D"},
    {Q:"./MPC3/question (476).jpg",A:"./MPC3/question (477).jpg",B:"./MPC3/question (478).jpg",C:"./MPC3/question (479).jpg",D:"./MPC3/question (480).jpg",Ans:"B"},
    {Q:"./MPC3/question (481).jpg",A:"./MPC3/question (482).jpg",B:"./MPC3/question (483).jpg",C:"./MPC3/question (484).jpg",D:"./MPC3/question (485).jpg",Ans:"D"},
    {Q:"./MPC3/question (486).jpg",A:"./MPC3/question (487).jpg",B:"./MPC3/question (488).jpg",C:"./MPC3/question (489).jpg",D:"./MPC3/question (490).jpg",Ans:"B"},
    {Q:"./MPC3/question (491).jpg",A:"./MPC3/question (492).jpg",B:"./MPC3/question (493).jpg",C:"./MPC3/question (494).jpg",D:"./MPC3/question (495).jpg",Ans:"B"},
    {Q:"./MPC3/question (496).jpg",A:"./MPC3/question (497).jpg",B:"./MPC3/question (498).jpg",C:"./MPC3/question (499).jpg",D:"./MPC3/question (500).jpg",Ans:"C"},
    {Q:"./MPC3/question (501).jpg",A:"./MPC3/question (502).jpg",B:"./MPC3/question (503).jpg",C:"./MPC3/question (504).jpg",D:"./MPC3/question (505).jpg",Ans:"C"},
    {Q:"./MPC3/question (506).jpg",A:"./MPC3/question (507).jpg",B:"./MPC3/question (508).jpg",C:"./MPC3/question (509).jpg",D:"./MPC3/question (510).jpg",Ans:"D"},
    {Q:"./MPC3/question (511).jpg",A:"./MPC3/question (512).jpg",B:"./MPC3/question (513).jpg",C:"./MPC3/question (514).jpg",D:"./MPC3/question (515).jpg",Ans:"B"},
    {Q:"./MPC3/question (516).jpg",A:"./MPC3/question (517).jpg",B:"./MPC3/question (518).jpg",C:"./MPC3/question (519).jpg",D:"./MPC3/question (520).jpg",Ans:"C"},
    {Q:"./MPC3/question (521).jpg",A:"./MPC3/question (522).jpg",B:"./MPC3/question (523).jpg",C:"./MPC3/question (524).jpg",D:"./MPC3/question (525).jpg",Ans:"C"},
    {Q:"./MPC3/question (526).jpg",A:"./MPC3/question (527).jpg",B:"./MPC3/question (528).jpg",C:"./MPC3/question (529).jpg",D:"./MPC3/question (530).jpg",Ans:"B"},
    {Q:"./MPC3/question (531).jpg",A:"./MPC3/question (532).jpg",B:"./MPC3/question (533).jpg",C:"./MPC3/question (534).jpg",D:"./MPC3/question (535).jpg",Ans:"C"},
    {Q:"./MPC3/question (536).jpg",A:"./MPC3/question (537).jpg",B:"./MPC3/question (538).jpg",C:"./MPC3/question (539).jpg",D:"./MPC3/question (540).jpg",Ans:"A"},
    {Q:"./MPC3/question (541).jpg",A:"./MPC3/question (542).jpg",B:"./MPC3/question (543).jpg",C:"./MPC3/question (544).jpg",D:"./MPC3/question (545).jpg",Ans:"D"},
    {Q:"./MPC3/question (546).jpg",A:"./MPC3/question (547).jpg",B:"./MPC3/question (548).jpg",C:"./MPC3/question (549).jpg",D:"./MPC3/question (550).jpg",Ans:"D"},
    {Q:"./MPC3/question (551).jpg",A:"./MPC3/question (552).jpg",B:"./MPC3/question (553).jpg",C:"./MPC3/question (554).jpg",D:"./MPC3/question (555).jpg",Ans:"C"},
    {Q:"./MPC3/question (556).jpg",A:"./MPC3/question (557).jpg",B:"./MPC3/question (558).jpg",C:"./MPC3/question (559).jpg",D:"./MPC3/question (560).jpg",Ans:"B"},
    {Q:"./MPC3/question (561).jpg",A:"./MPC3/question (562).jpg",B:"./MPC3/question (563).jpg",C:"./MPC3/question (564).jpg",D:"./MPC3/question (565).jpg",Ans:"D"},
    {Q:"./MPC3/question (566).jpg",A:"./MPC3/question (567).jpg",B:"./MPC3/question (568).jpg",C:"./MPC3/question (569).jpg",D:"./MPC3/question (570).jpg",Ans:"B"},
    {Q:"./MPC3/question (571).jpg",A:"./MPC3/question (572).jpg",B:"./MPC3/question (573).jpg",C:"./MPC3/question (574).jpg",D:"./MPC3/question (575).jpg",Ans:"C"},
    {Q:"./MPC3/question (576).jpg",A:"./MPC3/question (577).jpg",B:"./MPC3/question (578).jpg",C:"./MPC3/question (579).jpg",D:"./MPC3/question (580).jpg",Ans:"B"},
    {Q:"./MPC3/question (581).jpg",A:"./MPC3/question (582).jpg",B:"./MPC3/question (583).jpg",C:"./MPC3/question (584).jpg",D:"./MPC3/question (585).jpg",Ans:"D"},
    {Q:"./MPC3/question (586).jpg",A:"./MPC3/question (587).jpg",B:"./MPC3/question (588).jpg",C:"./MPC3/question (589).jpg",D:"./MPC3/question (590).jpg",Ans:"C"},
    {Q:"./MPC3/question (591).jpg",A:"./MPC3/question (592).jpg",B:"./MPC3/question (593).jpg",C:"./MPC3/question (594).jpg",D:"./MPC3/question (595).jpg",Ans:"B"},
    {Q:"./MPC3/question (596).jpg",A:"./MPC3/question (597).jpg",B:"./MPC3/question (598).jpg",C:"./MPC3/question (599).jpg",D:"./MPC3/question (600).jpg",Ans:"C"},
    {Q:"./MPC3/question (601).jpg",A:"./MPC3/question (602).jpg",B:"./MPC3/question (603).jpg",C:"./MPC3/question (604).jpg",D:"./MPC3/question (605).jpg",Ans:"C"},
    {Q:"./MPC3/question (606).jpg",A:"./MPC3/question (607).jpg",B:"./MPC3/question (608).jpg",C:"./MPC3/question (609).jpg",D:"./MPC3/question (610).jpg",Ans:"A"},
    {Q:"./MPC3/question (611).jpg",A:"./MPC3/question (612).jpg",B:"./MPC3/question (613).jpg",C:"./MPC3/question (614).jpg",D:"./MPC3/question (615).jpg",Ans:"C"},
    {Q:"./MPC3/question (616).jpg",A:"./MPC3/question (617).jpg",B:"./MPC3/question (618).jpg",C:"./MPC3/question (619).jpg",D:"./MPC3/question (620).jpg",Ans:"B"},
    {Q:"./MPC3/question (621).jpg",A:"./MPC3/question (622).jpg",B:"./MPC3/question (623).jpg",C:"./MPC3/question (624).jpg",D:"./MPC3/question (625).jpg",Ans:"B"},
    {Q:"./MPC3/question (626).jpg",A:"./MPC3/question (627).jpg",B:"./MPC3/question (628).jpg",C:"./MPC3/question (629).jpg",D:"./MPC3/question (630).jpg",Ans:"B"},
    {Q:"./MPC3/question (631).jpg",A:"./MPC3/question (632).jpg",B:"./MPC3/question (633).jpg",C:"./MPC3/question (634).jpg",D:"./MPC3/question (635).jpg",Ans:"C"},
    {Q:"./MPC3/question (636).jpg",A:"./MPC3/question (637).jpg",B:"./MPC3/question (638).jpg",C:"./MPC3/question (639).jpg",D:"./MPC3/question (640).jpg",Ans:"A"},
    {Q:"./MPC3/question (641).jpg",A:"./MPC3/question (642).jpg",B:"./MPC3/question (643).jpg",C:"./MPC3/question (644).jpg",D:"./MPC3/question (645).jpg",Ans:"B"},
    {Q:"./MPC3/question (646).jpg",A:"./MPC3/question (647).jpg",B:"./MPC3/question (648).jpg",C:"./MPC3/question (649).jpg",D:"./MPC3/question (650).jpg",Ans:"C"},
    {Q:"./MPC3/question (651).jpg",A:"./MPC3/question (652).jpg",B:"./MPC3/question (653).jpg",C:"./MPC3/question (654).jpg",D:"./MPC3/question (655).jpg",Ans:"D"},
    {Q:"./MPC3/question (656).jpg",A:"./MPC3/question (657).jpg",B:"./MPC3/question (658).jpg",C:"./MPC3/question (659).jpg",D:"./MPC3/question (660).jpg",Ans:"C"},
    {Q:"./MPC3/question (661).jpg",A:"./MPC3/question (662).jpg",B:"./MPC3/question (663).jpg",C:"./MPC3/question (664).jpg",D:"./MPC3/question (665).jpg",Ans:"A"},
    {Q:"./MPC3/question (666).jpg",A:"./MPC3/question (667).jpg",B:"./MPC3/question (668).jpg",C:"./MPC3/question (669).jpg",D:"./MPC3/question (670).jpg",Ans:"B"},
    {Q:"./MPC3/question (671).jpg",A:"./MPC3/question (672).jpg",B:"./MPC3/question (673).jpg",C:"./MPC3/question (674).jpg",D:"./MPC3/question (675).jpg",Ans:"B"},
    {Q:"./MPC3/question (676).jpg",A:"./MPC3/question (677).jpg",B:"./MPC3/question (678).jpg",C:"./MPC3/question (679).jpg",D:"./MPC3/question (680).jpg",Ans:"C"},
    {Q:"./MPC3/question (681).jpg",A:"./MPC3/question (682).jpg",B:"./MPC3/question (683).jpg",C:"./MPC3/question (684).jpg",D:"./MPC3/question (685).jpg",Ans:"D"},
    {Q:"./MPC3/question (686).jpg",A:"./MPC3/question (687).jpg",B:"./MPC3/question (688).jpg",C:"./MPC3/question (689).jpg",D:"./MPC3/question (690).jpg",Ans:"C"},
    {Q:"./MPC3/question (691).jpg",A:"./MPC3/question (692).jpg",B:"./MPC3/question (693).jpg",C:"./MPC3/question (694).jpg",D:"./MPC3/question (695).jpg",Ans:"A"},
    {Q:"./MPC3/question (696).jpg",A:"./MPC3/question (697).jpg",B:"./MPC3/question (698).jpg",C:"./MPC3/question (699).jpg",D:"./MPC3/question (700).jpg",Ans:"B"},
    {Q:"./MPC3/question (701).jpg",A:"./MPC3/question (702).jpg",B:"./MPC3/question (703).jpg",C:"./MPC3/question (704).jpg",D:"./MPC3/question (705).jpg",Ans:"D"},
    {Q:"./MPC3/question (706).jpg",A:"./MPC3/question (707).jpg",B:"./MPC3/question (708).jpg",C:"./MPC3/question (709).jpg",D:"./MPC3/question (710).jpg",Ans:"A"},
    {Q:"./MPC3/question (711).jpg",A:"./MPC3/question (712).jpg",B:"./MPC3/question (713).jpg",C:"./MPC3/question (714).jpg",D:"./MPC3/question (715).jpg",Ans:"B"},
    {Q:"./MPC3/question (716).jpg",A:"./MPC3/question (717).jpg",B:"./MPC3/question (718).jpg",C:"./MPC3/question (719).jpg",D:"./MPC3/question (720).jpg",Ans:"B"},
    {Q:"./MPC3/question (721).jpg",A:"./MPC3/question (722).jpg",B:"./MPC3/question (723).jpg",C:"./MPC3/question (724).jpg",D:"./MPC3/question (725).jpg",Ans:"B"},
    {Q:"./MPC3/question (726).jpg",A:"./MPC3/question (727).jpg",B:"./MPC3/question (728).jpg",C:"./MPC3/question (729).jpg",D:"./MPC3/question (730).jpg",Ans:"C"},
    {Q:"./MPC3/question (731).jpg",A:"./MPC3/question (732).jpg",B:"./MPC3/question (733).jpg",C:"./MPC3/question (734).jpg",D:"./MPC3/question (735).jpg",Ans:"D"},
    {Q:"./MPC3/question (736).jpg",A:"./MPC3/question (737).jpg",B:"./MPC3/question (738).jpg",C:"./MPC3/question (739).jpg",D:"./MPC3/question (740).jpg",Ans:"D"},
    {Q:"./MPC3/question (741).jpg",A:"./MPC3/question (742).jpg",B:"./MPC3/question (743).jpg",C:"./MPC3/question (744).jpg",D:"./MPC3/question (745).jpg",Ans:"D"},
    {Q:"./MPC3/question (746).jpg",A:"./MPC3/question (747).jpg",B:"./MPC3/question (748).jpg",C:"./MPC3/question (749).jpg",D:"./MPC3/question (750).jpg",Ans:"A"},
    {Q:"./MPC3/question (751).jpg",A:"./MPC3/question (752).jpg",B:"./MPC3/question (753).jpg",C:"./MPC3/question (754).jpg",D:"./MPC3/question (755).jpg",Ans:"C"},
    {Q:"./MPC3/question (756).jpg",A:"./MPC3/question (757).jpg",B:"./MPC3/question (758).jpg",C:"./MPC3/question (759).jpg",D:"./MPC3/question (760).jpg",Ans:"C"},
    {Q:"./MPC3/question (761).jpg",A:"./MPC3/question (762).jpg",B:"./MPC3/question (763).jpg",C:"./MPC3/question (764).jpg",D:"./MPC3/question (765).jpg",Ans:"C"},
    {Q:"./MPC3/question (766).jpg",A:"./MPC3/question (767).jpg",B:"./MPC3/question (768).jpg",C:"./MPC3/question (769).jpg",D:"./MPC3/question (770).jpg",Ans:"B"},
    {Q:"./MPC3/question (771).jpg",A:"./MPC3/question (772).jpg",B:"./MPC3/question (773).jpg",C:"./MPC3/question (774).jpg",D:"./MPC3/question (775).jpg",Ans:"A"},
    {Q:"./MPC3/question (776).jpg",A:"./MPC3/question (777).jpg",B:"./MPC3/question (778).jpg",C:"./MPC3/question (779).jpg",D:"./MPC3/question (780).jpg",Ans:"D"},
    {Q:"./MPC3/question (781).jpg",A:"./MPC3/question (782).jpg",B:"./MPC3/question (783).jpg",C:"./MPC3/question (784).jpg",D:"./MPC3/question (785).jpg",Ans:"A"},
    {Q:"./MPC3/question (786).jpg",A:"./MPC3/question (787).jpg",B:"./MPC3/question (788).jpg",C:"./MPC3/question (789).jpg",D:"./MPC3/question (790).jpg",Ans:"B"},
    {Q:"./MPC3/question (791).jpg",A:"./MPC3/question (792).jpg",B:"./MPC3/question (793).jpg",C:"./MPC3/question (794).jpg",D:"./MPC3/question (795).jpg",Ans:"D"},
    {Q:"./MPC3/question (796).jpg",A:"./MPC3/question (797).jpg",B:"./MPC3/question (798).jpg",C:"./MPC3/question (799).jpg",D:"./MPC3/question (800).jpg",Ans:"B"}
    ];

function checkans(){
    var s=document.getElementsByClassName("answer");
    for(var i = 0; i < s.length ;i++){
        if(s[i].checked){
            s[i].checked = false;
            return s[i];

        }
        
    }
}
function validate(){
    var res = 0;
    ans = checkans();
    if(ans == undefined){
        if(document.getElementById((currquestion+1).toString()).style.background !="blue")
        document.getElementById((currquestion+1).toString()).style.background ="red";
        return 0;
    }
    if(document.getElementById((currquestion+1).toString()).style.background !="blue")
    document.getElementById((currquestion+1).toString()).style.background ="green";
    if(ans.id == qb[currquestion].Ans){
        if(map.get(currquestion)!=null){
            if(ans.id == map.get(currquestion))
            return 0;
        }
       res = 1;
    }
    map.set(currquestion,ans.id);
    return res;
    
    
}
function showans(clicked_id){
 
    var qno = Number(clicked_id);
    score = score + validate(currquestion);
    display(qno-1);
    currquestion = qno-1;
    check_prev_record();



}
function check_prev_record(){
    if(map.get(currquestion)!=null){
        document.getElementById(map.get(currquestion)).checked= true;
       
    }
   
}

function next(){
    score = score + validate();
    display(currquestion+1);
    currquestion += 1;
    check_prev_record();
   
    const q = (currquestion + 1).toString();
    if(document.getElementById(q).style.background != "blue")
    document.getElementById("mreview").checked = false;
    else
    document.getElementById("mreview").checked = true ;
    
 
}
function previous(){
    score = score + validate();
    display(currquestion - 1);
    currquestion = currquestion -1;
    check_prev_record();
    if(document.getElementById('${currquestion + 1}').style.background == "blue")
    document.getElementById("mchecked").checked = true;
    else
    document.getElementById("mchecked").checked = false ;
    
}
function display(elementt){
    document.getElementById("question").innerHTML=`<img id="questionimg" src="${qb[elementt].Q}" >`;
    document.getElementById("qno").innerHTML=`<p>${elementt+1} of 160</p>`;
    document.getElementById("opt1").innerHTML=`<img id="opt" src= "${qb[elementt].A}" >`; 
    document.getElementById("opt2").innerHTML=`<img id="opt" src= "${qb[elementt].B}" >`; 
    document.getElementById("opt3").innerHTML=`<img id="opt" src= "${qb[elementt].C}" >`; 
    document.getElementById("opt4").innerHTML=`<img id="opt" src= "${qb[elementt].D}" >`; 
   

}
function showquestions(){

   var qbtn =  document.getElementById("questionbuttons");
   if(qbtn.style.display !="flex")
   qbtn.style.display="flex";
   else{
    qbtn.style.display="none";
   }
   showanalysis();
}
function submitexam(){
    attempted = 0 ;
    unanswered = 0 ;
    const qanda = document.getElementsByClassName("QuestionButtons1_160")
    for(var i = 0 ; i< 160; i++){
        if(qanda[i].style.background == "green")
        attempted = attempted + 1;
        else
        unanswered = unanswered + 1;
    }
    incorrect = attempted - score ;
    var seconds = Number(document.getElementById("sec").innerHTML);
    var minutes = Number(document.getElementById("min").innerHTML);

    var takenmin = 180-minutes-1;
    var takensec = 60-seconds;
    if(takensec == 60){
        takenmin = takenmin +1 ;
        takensec = 0;
    }

    var time = takenmin.toString() + " : " + takensec.toString() +" sec";
    const jsonString = JSON.stringify(Object.fromEntries(map));

    // Encode the JSON string as a URL parameter
    const map1 = encodeURIComponent(jsonString);
    
    
    location.href="/test3results?map="+ map1 + "&score=" +score +"&incorrect=" + incorrect + "&unanswered=" + unanswered + "&time=" +time;

    
}





