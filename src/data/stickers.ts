export interface Sticker {
  code: string
  file: string
  title: string
  rarity: string
  emoji: string
  chance: number
}

const stickers = [
  {
  "code": "130-SJ2",
  "file": "temp2/2 (81).jpg",
  "title": "Figurinha 130",
  "rarity": "Lendária",
  "emoji": "🟡",
  "chance": 2
},
{
  "code": "131-LAD",
  "file": "temp2/2 (63).jpg",
  "title": "Figurinha 131",
  "rarity": "Lendária",
  "emoji": "🟡",
  "chance": 2
},
{
  "code": "132-S4F",
  "file": "temp2/2 (64).jpg",
  "title": "Figurinha 132",
  "rarity": "Lendária",
  "emoji": "🟡",
  "chance": 2
},
{
  "code": "133-MZV",
  "file": "temp2/2 (65).jpg",
  "title": "Figurinha 133",
  "rarity": "Lendária",
  "emoji": "🟡",
  "chance": 2
},
{
  "code": "134-YPT",
  "file": "temp2/2 (91).jpg",
  "title": "Figurinha 134",
  "rarity": "Lendária",
  "emoji": "🟡",
  "chance": 2
},
{
  "code": "135-PFW",
  "file": "temp2/2 (149).jpg",
  "title": "Figurinha 135",
  "rarity": "Lendária",
  "emoji": "🟡",
  "chance": 2
},
  {
    "code": "001-SKE",
    "file": "temp1/1 (99).jpg",
    "title": "Figurinha 001",
    "rarity": "Lendária",
    "emoji": "🟡",
    "chance": 2
  },
  {
    "code": "002-V9L",
    "file": "temp1/1 (89).jpg",
    "title": "Figurinha 002",
    "rarity": "Lendária",
    "emoji": "🟡",
    "chance": 2
  },
  {
    "code": "003-X19",
    "file": "temp1/1 (61).jpg",
    "title": "Figurinha 003",
    "rarity": "Lendária",
    "emoji": "🟡",
    "chance": 2
  },
  {
    "code": "004-DPF",
    "file": "temp1/1 (63).jpg",
    "title": "Figurinha 004",
    "rarity": "Lendária",
    "emoji": "🟡",
    "chance": 2
  },
  {
    "code": "005-C5L",
    "file": "temp1/temp1/1 (37).jpg",
    "title": "Figurinha 005",
    "rarity": "Lendária",
    "emoji": "🟡",
    "chance": 2
  },
  {
    "code": "006-YZN",
    "file": "temp1/1 (32).jpg",
    "title": "Figurinha 006",
    "rarity": "Lendária",
    "emoji": "🟡",
    "chance": 2
  },
  {
    "code": "001-GQQ",
    "file": "temp2/2 (1).jpg",
    "title": "Figurinha 001",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "002-1S0",
    "file": "temp2/2 (10).jpg",
    "title": "Figurinha 002",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "003-NJE",
    "file": "temp2/2 (100).jpg",
    "title": "Figurinha 003",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "004-EH7",
    "file": "temp2/2 (101).jpg",
    "title": "Figurinha 004",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "005-K2D",
    "file": "temp2/2 (102).jpg",
    "title": "Figurinha 005",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },  {
    "code": "007-JPC",
    "file": "temp1/1 (104).jpg",
    "title": "Figurinha 007",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "008-Q1N",
    "file": "temp1/1 (105).jpg",
    "title": "Figurinha 008",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "009-4VK",
    "file": "temp1/1 (106).jpg",
    "title": "Figurinha 009",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "010-9AC",
    "file": "temp1/1 (107).jpg",
    "title": "Figurinha 010",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "011-7QJ",
    "file": "temp1/1 (108).jpg",
    "title": "Figurinha 011",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "012-IZ0",
    "file": "temp1/1 (109).jpg",
    "title": "Figurinha 012",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "013-U8V",
    "file": "temp1/1 (11).jpg",
    "title": "Figurinha 013",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "014-ONN",
    "file": "temp1/1 (110).jpg",
    "title": "Figurinha 014",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "015-Z0M",
    "file": "temp1/1 (111).jpg",
    "title": "Figurinha 015",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "016-M25",
    "file": "temp1/1 (112).jpg",
    "title": "Figurinha 016",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "017-8C6",
    "file": "temp1/1 (113).jpg",
    "title": "Figurinha 017",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "018-HFT",
    "file": "temp1/1 (114).jpg",
    "title": "Figurinha 018",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "019-ZMA",
    "file": "temp1/1 (115).jpg",
    "title": "Figurinha 019",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "020-KOX",
    "file": "temp1/1 (116).jpg",
    "title": "Figurinha 020",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "021-288",
    "file": "temp1/1 (117).jpg",
    "title": "Figurinha 021",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 15
  },
  {
    "code": "022-ZUM",
    "file": "temp1/1 (118).jpg",
    "title": "Figurinha 022",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "023-PRC",
    "file": "temp1/1 (119).jpg",
    "title": "Figurinha 023",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "024-M6W",
    "file": "temp1/1 (12).jpg",
    "title": "Figurinha 024",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "025-KLU",
    "file": "temp1/1 (120).jpg",
    "title": "Figurinha 025",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "026-F9N",
    "file": "temp1/1 (121).jpg",
    "title": "Figurinha 026",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "027-I2Y",
    "file": "temp1/1 (122).jpg",
    "title": "Figurinha 027",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "028-EXB",
    "file": "temp1/1 (123).jpg",
    "title": "Figurinha 028",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "029-842",
    "file": "temp1/1 (124).jpg",
    "title": "Figurinha 029",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "030-38C",
    "file": "temp1/1 (125).jpg",
    "title": "Figurinha 030",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "031-AK9",
    "file": "temp1/1 (126).jpg",
    "title": "Figurinha 031",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "032-TXT",
    "file": "temp1/1 (127).jpg",
    "title": "Figurinha 032",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "033-RBK",
    "file": "temp1/1 (128).jpg",
    "title": "Figurinha 033",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "034-U4X",
    "file": "temp1/1 (129).jpg",
    "title": "Figurinha 034",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "035-CPK",
    "file": "temp1/1 (13).jpg",
    "title": "Figurinha 035",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "036-D5K",
    "file": "temp1/1 (130).jpg",
    "title": "Figurinha 036",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "037-GPB",
    "file": "temp1/1 (14).jpg",
    "title": "Figurinha 037",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "038-27J",
    "file": "temp1/1 (15).jpg",
    "title": "Figurinha 038",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "039-M4V",
    "file": "temp1/1 (16).jpg",
    "title": "Figurinha 039",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "040-BNM",
    "file": "temp1/1 (17).jpg",
    "title": "Figurinha 040",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "041-RZU",
    "file": "temp1/1 (18).jpg",
    "title": "Figurinha 041",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "042-ZVN",
    "file": "temp1/1 (19).jpg",
    "title": "Figurinha 042",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "043-G8P",
    "file": "temp1/1 (2).jpg",
    "title": "Figurinha 043",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "044-WFP",
    "file": "temp1/1 (20).jpg",
    "title": "Figurinha 044",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "045-IJ9",
    "file": "temp1/1 (21).jpg",
    "title": "Figurinha 045",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "046-5RN",
    "file": "temp1/1 (22).jpg",
    "title": "Figurinha 046",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "047-B0M",
    "file": "temp1/1 (23).jpg",
    "title": "Figurinha 047",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "048-M0H",
    "file": "temp1/1 (24).jpg",
    "title": "Figurinha 048",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "049-QMX",
    "file": "temp1/1 (25).jpg",
    "title": "Figurinha 049",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "050-V5K",
    "file": "temp1/1 (26).jpg",
    "title": "Figurinha 050",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "051-Q6M",
    "file": "temp1/1 (27).jpg",
    "title": "Figurinha 051",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 30
  },
  {
    "code": "052-31L",
    "file": "temp1/1 (28).jpg",
    "title": "Figurinha 052",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "053-532",
    "file": "temp1/1 (29).jpg",
    "title": "Figurinha 053",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "054-KWS",
    "file": "temp1/1 (3).jpg",
    "title": "Figurinha 054",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "055-96N",
    "file": "temp1/1 (30).jpg",
    "title": "Figurinha 055",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "056-F33",
    "file": "temp1/1 (31).jpg",
    "title": "Figurinha 056",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "057-50U",
    "file": "temp1/1 (103).jpg",
    "title": "Figurinha 057",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "058-GXQ",
    "file": "temp1/1 (33).jpg",
    "title": "Figurinha 058",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "059-BDC",
    "file": "temp1/1 (34).jpg",
    "title": "Figurinha 059",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "060-I11",
    "file": "temp1/1 (35).jpg",
    "title": "Figurinha 060",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "061-HTO",
    "file": "temp1/1 (36).jpg",
    "title": "Figurinha 061",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "062-VVN",
    "file": "temp1/1 (102).jpg",
    "title": "Figurinha 062",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "063-NQN",
    "file": "temp1/1 (38).jpg",
    "title": "Figurinha 063",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "064-JB4",
    "file": "temp1/1 (39).jpg",
    "title": "Figurinha 064",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "065-1PT",
    "file": "temp1/1 (4).jpg",
    "title": "Figurinha 065",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "066-VGQ",
    "file": "temp1/1 (40).jpg",
    "title": "Figurinha 066",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "067-TRO",
    "file": "temp1/1 (41).jpg",
    "title": "Figurinha 067",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "068-O06",
    "file": "temp1/1 (42).jpg",
    "title": "Figurinha 068",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "069-SUN",
    "file": "temp1/1 (43).jpg",
    "title": "Figurinha 069",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "070-X7J",
    "file": "temp1/1 (44).jpg",
    "title": "Figurinha 070",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "071-LJO",
    "file": "temp1/1 (45).jpg",
    "title": "Figurinha 071",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "072-WC3",
    "file": "temp1/1 (46).jpg",
    "title": "Figurinha 072",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "073-61P",
    "file": "temp1/1 (47).jpg",
    "title": "Figurinha 073",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "074-FZ2",
    "file": "temp1/1 (48).jpg",
    "title": "Figurinha 074",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "075-3OJ",
    "file": "temp1/1 (49).jpg",
    "title": "Figurinha 075",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "076-GS0",
    "file": "temp1/1 (5).jpg",
    "title": "Figurinha 076",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "077-0KM",
    "file": "temp1/1 (50).jpg",
    "title": "Figurinha 077",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "078-KUO",
    "file": "temp1/1 (51).jpg",
    "title": "Figurinha 078",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "079-LLY",
    "file": "temp1/1 (52).jpg",
    "title": "Figurinha 079",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "080-23T",
    "file": "temp1/1 (53).jpg",
    "title": "Figurinha 080",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "081-4O8",
    "file": "temp1/1 (54).jpg",
    "title": "Figurinha 081",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "082-TO1",
    "file": "temp1/1 (55).jpg",
    "title": "Figurinha 082",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "083-X6Y",
    "file": "temp1/1 (56).jpg",
    "title": "Figurinha 083",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "084-5BY",
    "file": "temp1/1 (57).jpg",
    "title": "Figurinha 084",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "085-ESO",
    "file": "temp1/1 (58).jpg",
    "title": "Figurinha 085",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "086-320",
    "file": "temp1/1 (59).jpg",
    "title": "Figurinha 086",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "087-APN",
    "file": "temp1/1 (6).jpg",
    "title": "Figurinha 087",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "088-AHR",
    "file": "temp1/1 (60).jpg",
    "title": "Figurinha 088",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "089-I1F",
    "file": "temp1/1 (100).jpg",
    "title": "Figurinha 089",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "090-C5H",
    "file": "temp1/1 (62).jpg",
    "title": "Figurinha 090",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "091-XSP",
    "file": "temp1/1 (101).jpg",
    "title": "Figurinha 091",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "092-R3Q",
    "file": "temp1/1 (64).jpg",
    "title": "Figurinha 092",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "093-PF4",
    "file": "temp1/1 (65).jpg",
    "title": "Figurinha 093",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "094-7OF",
    "file": "temp1/1 (66).jpg",
    "title": "Figurinha 094",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "095-696",
    "file": "temp1/1 (67).jpg",
    "title": "Figurinha 095",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "096-IKX",
    "file": "temp1/1 (68).jpg",
    "title": "Figurinha 096",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "097-CCK",
    "file": "temp1/1 (69).jpg",
    "title": "Figurinha 097",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "098-200",
    "file": "temp1/1 (7).jpg",
    "title": "Figurinha 098",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "099-DEO",
    "file": "temp1/1 (70).jpg",
    "title": "Figurinha 099",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "100-QCC",
    "file": "temp1/1 (71).jpg",
    "title": "Figurinha 100",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "101-EKB",
    "file": "temp1/1 (72).jpg",
    "title": "Figurinha 101",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "102-MS3",
    "file": "temp1/1 (73).jpg",
    "title": "Figurinha 102",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "103-NMK",
    "file": "temp1/1 (74).jpg",
    "title": "Figurinha 103",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "104-EEH",
    "file": "temp1/1 (75).jpg",
    "title": "Figurinha 104",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "105-OU1",
    "file": "temp1/1 (76).jpg",
    "title": "Figurinha 105",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "106-QM0",
    "file": "temp1/1 (77).jpg",
    "title": "Figurinha 106",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "107-85T",
    "file": "temp1/1 (78).jpg",
    "title": "Figurinha 107",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "108-I8Q",
    "file": "temp1/1 (8).jpg",
    "title": "Figurinha 108",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "109-QRX",
    "file": "temp1/1 (80).jpg",
    "title": "Figurinha 109",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "110-O1T",
    "file": "temp1/1 (81).jpg",
    "title": "Figurinha 110",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "111-0IL",
    "file": "temp1/1 (82).jpg",
    "title": "Figurinha 111",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "112-2VT",
    "file": "temp1/1 (83).jpg",
    "title": "Figurinha 112",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "113-OW8",
    "file": "temp1/1 (84).jpg",
    "title": "Figurinha 113",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "114-1FF",
    "file": "temp1/1 (85).jpg",
    "title": "Figurinha 114",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "115-T64",
    "file": "temp1/1 (86).jpg",
    "title": "Figurinha 115",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "116-AVZ",
    "file": "temp1/1 (87).jpg",
    "title": "Figurinha 116",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "117-VL7",
    "file": "temp1/1 (88).jpg",
    "title": "Figurinha 117",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "118-RL4",
    "file": "temp1/1 (10).jpg",
    "title": "Figurinha 118",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "119-FN8",
    "file": "temp1/1 (9).jpg",
    "title": "Figurinha 119",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "120-QCP",
    "file": "temp1/1 (90).jpg",
    "title": "Figurinha 120",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "121-BYH",
    "file": "temp1/1 (91).jpg",
    "title": "Figurinha 121",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "122-TJO",
    "file": "temp1/1 (92).jpg",
    "title": "Figurinha 122",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "123-FQL",
    "file": "temp1/1 (93).jpg",
    "title": "Figurinha 123",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "124-L6O",
    "file": "temp1/1 (94).jpg",
    "title": "Figurinha 124",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "125-FAR",
    "file": "temp1/1 (95).jpg",
    "title": "Figurinha 125",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "126-I6F",
    "file": "temp1/1 (96).jpg",
    "title": "Figurinha 126",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "127-0HC",
    "file": "temp1/1 (97).jpg",
    "title": "Figurinha 127",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "128-RRD",
    "file": "temp1/1 (98).jpg",
    "title": "Figurinha 128",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  },
  {
    "code": "129-80V",
    "file": "temp1/1 (1).jpg",
    "title": "Figurinha 129",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 50
  }
,
  {
    "code": "006-7KF",
    "file": "temp2/2 (103).jpg",
    "title": "Figurinha 006",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "007-58E",
    "file": "temp2/2 (104).jpg",
    "title": "Figurinha 007",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "008-5MP",
    "file": "temp2/2 (105).jpg",
    "title": "Figurinha 008",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "009-PCC",
    "file": "temp2/2 (106).jpg",
    "title": "Figurinha 009",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "010-G4X",
    "file": "temp2/2 (107).jpg",
    "title": "Figurinha 010",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "011-3H1",
    "file": "temp2/2 (108).jpg",
    "title": "Figurinha 011",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "012-BWC",
    "file": "temp2/2 (109).jpg",
    "title": "Figurinha 012",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "013-YSK",
    "file": "temp2/2 (11).jpg",
    "title": "Figurinha 013",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "014-K1R",
    "file": "temp2/2 (110).jpg",
    "title": "Figurinha 014",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "015-XVZ",
    "file": "temp2/2 (111).jpg",
    "title": "Figurinha 015",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "016-98R",
    "file": "temp2/2 (112).jpg",
    "title": "Figurinha 016",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "017-HEV",
    "file": "temp2/2 (113).jpg",
    "title": "Figurinha 017",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "018-YW1",
    "file": "temp2/2 (114).jpg",
    "title": "Figurinha 018",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "019-EQ6",
    "file": "temp2/2 (115).jpg",
    "title": "Figurinha 019",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "020-IRQ",
    "file": "temp2/2 (116).jpg",
    "title": "Figurinha 020",
    "rarity": "Épica",
    "emoji": "🟣",
    "chance": 8
  },
  {
    "code": "021-M0X",
    "file": "temp2/2 (117).jpg",
    "title": "Figurinha 021",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "022-4KU",
    "file": "temp2/2 (118).jpg",
    "title": "Figurinha 022",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "023-U60",
    "file": "temp2/2 (119).jpg",
    "title": "Figurinha 023",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "024-0TH",
    "file": "temp2/2 (12).jpg",
    "title": "Figurinha 024",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "025-V0X",
    "file": "temp2/2 (120).jpg",
    "title": "Figurinha 025",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "026-WG7",
    "file": "temp2/2 (121).jpg",
    "title": "Figurinha 026",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "027-A7S",
    "file": "temp2/2 (122).jpg",
    "title": "Figurinha 027",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "028-BH0",
    "file": "temp2/2 (123).jpg",
    "title": "Figurinha 028",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "029-RXZ",
    "file": "temp2/2 (124).jpg",
    "title": "Figurinha 029",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "030-0LS",
    "file": "temp2/2 (125).jpg",
    "title": "Figurinha 030",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "031-BCD",
    "file": "temp2/2 (126).jpg",
    "title": "Figurinha 031",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "032-0WW",
    "file": "temp2/2 (127).jpg",
    "title": "Figurinha 032",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "033-YQ7",
    "file": "temp2/2 (128).jpg",
    "title": "Figurinha 033",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "034-O7R",
    "file": "temp2/2 (129).jpg",
    "title": "Figurinha 034",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "035-B05",
    "file": "temp2/2 (13).jpg",
    "title": "Figurinha 035",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "036-HIB",
    "file": "temp2/2 (130).jpg",
    "title": "Figurinha 036",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "037-PSM",
    "file": "temp2/2 (131).jpg",
    "title": "Figurinha 037",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "038-U6L",
    "file": "temp2/2 (132).jpg",
    "title": "Figurinha 038",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "039-M65",
    "file": "temp2/2 (133).jpg",
    "title": "Figurinha 039",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "040-QTF",
    "file": "temp2/2 (134).jpg",
    "title": "Figurinha 040",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "041-17B",
    "file": "temp2/2 (135).jpg",
    "title": "Figurinha 041",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "042-1KM",
    "file": "temp2/2 (136).jpg",
    "title": "Figurinha 042",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "043-WLW",
    "file": "temp2/2 (137).jpg",
    "title": "Figurinha 043",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "044-N38",
    "file": "temp2/2 (138).jpg",
    "title": "Figurinha 044",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "045-CDB",
    "file": "temp2/2 (139).jpg",
    "title": "Figurinha 045",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "046-RY3",
    "file": "temp2/2 (14).jpg",
    "title": "Figurinha 046",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "047-HOZ",
    "file": "temp2/2 (140).jpg",
    "title": "Figurinha 047",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "048-RQ5",
    "file": "temp2/2 (141).jpg",
    "title": "Figurinha 048",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "049-S46",
    "file": "temp2/2 (142).jpg",
    "title": "Figurinha 049",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "050-W1N",
    "file": "temp2/2 (143).jpg",
    "title": "Figurinha 050",
    "rarity": "Rara",
    "emoji": "🔵",
    "chance": 20
  },
  {
    "code": "051-LWE",
    "file": "temp2/2 (144).jpg",
    "title": "Figurinha 051",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "052-U3Q",
    "file": "temp2/2 (145).jpg",
    "title": "Figurinha 052",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "053-25G",
    "file": "temp2/2 (146).jpg",
    "title": "Figurinha 053",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "054-7Y1",
    "file": "temp2/2 (147).jpg",
    "title": "Figurinha 054",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "055-OL6",
    "file": "temp2/2 (148).jpg",
    "title": "Figurinha 055",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "056-2Z8",
    "file": "temp2/2 (103).jpg",
    "title": "Figurinha 056",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "057-ICE",
    "file": "temp2/2 (15).jpg",
    "title": "Figurinha 057",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "058-7J0",
    "file": "temp2/2 (150).jpg",
    "title": "Figurinha 058",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "059-YXG",
    "file": "temp2/2 (151).jpg",
    "title": "Figurinha 059",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "060-5YL",
    "file": "temp2/2 (152).jpg",
    "title": "Figurinha 060",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "061-PB8",
    "file": "temp2/2 (153).jpg",
    "title": "Figurinha 061",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "062-JOE",
    "file": "temp2/2 (154).jpg",
    "title": "Figurinha 062",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "063-8C6",
    "file": "temp2/2 (155).jpg",
    "title": "Figurinha 063",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "064-NNE",
    "file": "temp2/2 (156).jpg",
    "title": "Figurinha 064",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "065-L7K",
    "file": "temp2/2 (157).jpg",
    "title": "Figurinha 065",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "066-1NI",
    "file": "temp2/2 (158).jpg",
    "title": "Figurinha 066",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "067-V7U",
    "file": "temp2/2 (159).jpg",
    "title": "Figurinha 067",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "068-I9W",
    "file": "temp2/2 (16).jpg",
    "title": "Figurinha 068",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "069-KND",
    "file": "temp2/2 (160).jpg",
    "title": "Figurinha 069",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "070-E4D",
    "file": "temp2/2 (161).jpg",
    "title": "Figurinha 070",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "071-6Y2",
    "file": "temp2/2 (162).jpg",
    "title": "Figurinha 071",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "072-VEN",
    "file": "temp2/2 (163).jpg",
    "title": "Figurinha 072",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "073-4F5",
    "file": "temp2/2 (164).jpg",
    "title": "Figurinha 073",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "074-Y24",
    "file": "temp2/2 (165).jpg",
    "title": "Figurinha 074",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "075-LR6",
    "file": "temp2/2 (166).jpg",
    "title": "Figurinha 075",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "076-JRA",
    "file": "temp2/2 (167).jpg",
    "title": "Figurinha 076",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "077-Z9N",
    "file": "temp2/2 (168).jpg",
    "title": "Figurinha 077",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "078-8KY",
    "file": "temp2/2 (169).jpg",
    "title": "Figurinha 078",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "079-ZZ2",
    "file": "temp2/2 (17).jpg",
    "title": "Figurinha 079",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "080-3E4",
    "file": "temp2/2 (170).jpg",
    "title": "Figurinha 080",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "081-6V1",
    "file": "temp2/2 (171).jpg",
    "title": "Figurinha 081",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "082-DBN",
    "file": "temp2/2 (172).jpg",
    "title": "Figurinha 082",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "083-N94",
    "file": "temp2/2 (173).jpg",
    "title": "Figurinha 083",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "084-T5C",
    "file": "temp2/2 (174).jpg",
    "title": "Figurinha 084",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "085-400",
    "file": "temp2/2 (175).jpg",
    "title": "Figurinha 085",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "086-N21",
    "file": "temp2/2 (176).jpg",
    "title": "Figurinha 086",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "087-NTF",
    "file": "temp2/2 (177).jpg",
    "title": "Figurinha 087",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "088-JV9",
    "file": "temp2/2 (178).jpg",
    "title": "Figurinha 088",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "089-WY9",
    "file": "temp2/2 (179).jpg",
    "title": "Figurinha 089",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "090-ULF",
    "file": "temp2/2 (18).jpg",
    "title": "Figurinha 090",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "091-L4E",
    "file": "temp2/2 (180).jpg",
    "title": "Figurinha 091",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "092-IOR",
    "file": "temp2/2 (181).jpg",
    "title": "Figurinha 092",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "093-JK8",
    "file": "temp2/2 (182).jpg",
    "title": "Figurinha 093",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "094-PKH",
    "file": "temp2/2 (183).jpg",
    "title": "Figurinha 094",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "095-T3H",
    "file": "temp2/2 (184).jpg",
    "title": "Figurinha 095",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "096-SR0",
    "file": "temp2/2 (185).jpg",
    "title": "Figurinha 096",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "097-G5T",
    "file": "temp2/2 (186).jpg",
    "title": "Figurinha 097",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "098-X42",
    "file": "temp2/2 (187).jpg",
    "title": "Figurinha 098",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "099-275",
    "file": "temp2/2 (188).jpg",
    "title": "Figurinha 099",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "100-WHG",
    "file": "temp2/2 (189).jpg",
    "title": "Figurinha 100",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "101-IYL",
    "file": "temp2/2 (19).jpg",
    "title": "Figurinha 101",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "102-AYJ",
    "file": "temp2/2 (190).jpg",
    "title": "Figurinha 102",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "103-G50",
    "file": "temp2/2 (191).jpg",
    "title": "Figurinha 103",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "104-53V",
    "file": "temp2/2 (192).jpg",
    "title": "Figurinha 104",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "105-5C3",
    "file": "temp2/2 (193).jpg",
    "title": "Figurinha 105",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "106-JQQ",
    "file": "temp2/2 (194).jpg",
    "title": "Figurinha 106",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "107-GNI",
    "file": "temp2/2 (195).jpg",
    "title": "Figurinha 107",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "108-BY7",
    "file": "temp2/2 (196).jpg",
    "title": "Figurinha 108",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "109-3JQ",
    "file": "temp2/2 (197).jpg",
    "title": "Figurinha 109",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "110-NUE",
    "file": "temp2/2 (198).jpg",
    "title": "Figurinha 110",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "111-98P",
    "file": "temp2/2 (199).jpg",
    "title": "Figurinha 111",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "112-F2B",
    "file": "temp2/2 (2).jpg",
    "title": "Figurinha 112",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "113-YOP",
    "file": "temp2/2 (20).jpg",
    "title": "Figurinha 113",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "114-7VU",
    "file": "temp2/2 (200).jpg",
    "title": "Figurinha 114",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "115-AXH",
    "file": "temp2/2 (201).jpg",
    "title": "Figurinha 115",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "116-00L",
    "file": "temp2/2 (202).jpg",
    "title": "Figurinha 116",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "117-EEZ",
    "file": "temp2/2 (203).jpg",
    "title": "Figurinha 117",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "118-R8Q",
    "file": "temp2/2 (204).jpg",
    "title": "Figurinha 118",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "119-6MY",
    "file": "temp2/2 (205).jpg",
    "title": "Figurinha 119",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "120-LX0",
    "file": "temp2/2 (206).jpg",
    "title": "Figurinha 120",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "121-FHP",
    "file": "temp2/2 (207).jpg",
    "title": "Figurinha 121",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "122-3GB",
    "file": "temp2/2 (208).jpg",
    "title": "Figurinha 122",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "123-V5K",
    "file": "temp2/2 (209).jpg",
    "title": "Figurinha 123",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "124-47R",
    "file": "temp2/2 (21).jpg",
    "title": "Figurinha 124",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "125-703",
    "file": "temp2/2 (210).jpg",
    "title": "Figurinha 125",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "126-VNZ",
    "file": "temp2/2 (211).jpg",
    "title": "Figurinha 126",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "127-R70",
    "file": "temp2/2 (212).jpg",
    "title": "Figurinha 127",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "128-U44",
    "file": "temp2/2 (213).jpg",
    "title": "Figurinha 128",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "129-VGI",
    "file": "temp2/2 (214).jpg",
    "title": "Figurinha 129",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "130-LF9",
    "file": "temp2/2 (215).jpg",
    "title": "Figurinha 130",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "131-YMT",
    "file": "temp2/2 (216).jpg",
    "title": "Figurinha 131",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "132-PLU",
    "file": "temp2/2 (217).jpg",
    "title": "Figurinha 132",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "133-IXG",
    "file": "temp2/2 (218).jpg",
    "title": "Figurinha 133",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "134-9JT",
    "file": "temp2/2 (219).jpg",
    "title": "Figurinha 134",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "135-79C",
    "file": "temp2/2 (22).jpg",
    "title": "Figurinha 135",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "136-S4A",
    "file": "temp2/2 (220).jpg",
    "title": "Figurinha 136",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "137-SZG",
    "file": "temp2/2 (221).jpg",
    "title": "Figurinha 137",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "138-MDN",
    "file": "temp2/2 (222).jpg",
    "title": "Figurinha 138",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "139-ZQB",
    "file": "temp2/2 (223).jpg",
    "title": "Figurinha 139",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "140-MHB",
    "file": "temp2/2 (224).jpg",
    "title": "Figurinha 140",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "141-8Z3",
    "file": "temp2/2 (225).jpg",
    "title": "Figurinha 141",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "142-AMN",
    "file": "temp2/2 (226).jpg",
    "title": "Figurinha 142",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "143-4LV",
    "file": "temp2/2 (227).jpg",
    "title": "Figurinha 143",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "144-J7R",
    "file": "temp2/2 (228).jpg",
    "title": "Figurinha 144",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "145-0SP",
    "file": "temp2/2 (229).jpg",
    "title": "Figurinha 145",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "146-GBR",
    "file": "temp2/2 (23).jpg",
    "title": "Figurinha 146",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "147-MOA",
    "file": "temp2/2 (230).jpg",
    "title": "Figurinha 147",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "148-M2L",
    "file": "temp2/2 (24).jpg",
    "title": "Figurinha 148",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "149-EMN",
    "file": "temp2/2 (25).jpg",
    "title": "Figurinha 149",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "150-WX0",
    "file": "temp2/2 (26).jpg",
    "title": "Figurinha 150",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "151-III",
    "file": "temp2/2 (27).jpg",
    "title": "Figurinha 151",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "152-9EX",
    "file": "temp2/2 (28).jpg",
    "title": "Figurinha 152",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "153-0P9",
    "file": "temp2/2 (29).jpg",
    "title": "Figurinha 153",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "154-ZD4",
    "file": "temp2/2 (3).jpg",
    "title": "Figurinha 154",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "155-A1O",
    "file": "temp2/2 (30).jpg",
    "title": "Figurinha 155",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "156-3RV",
    "file": "temp2/2 (31).jpg",
    "title": "Figurinha 156",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "157-FXV",
    "file": "temp2/2 (32).jpg",
    "title": "Figurinha 157",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "158-MZ2",
    "file": "temp2/2 (33).jpg",
    "title": "Figurinha 158",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "159-7T1",
    "file": "temp2/2 (34).jpg",
    "title": "Figurinha 159",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "160-GWP",
    "file": "temp2/2 (35).jpg",
    "title": "Figurinha 160",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "161-RM9",
    "file": "temp2/2 (36).jpg",
    "title": "Figurinha 161",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "162-XLW",
    "file": "temp2/2 (37).jpg",
    "title": "Figurinha 162",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "163-71S",
    "file": "temp2/2 (38).jpg",
    "title": "Figurinha 163",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "164-ZAF",
    "file": "temp2/2 (39).jpg",
    "title": "Figurinha 164",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "165-UW5",
    "file": "temp2/2 (4).jpg",
    "title": "Figurinha 165",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "166-AJM",
    "file": "temp2/2 (40).jpg",
    "title": "Figurinha 166",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "167-MVV",
    "file": "temp2/2 (41).jpg",
    "title": "Figurinha 167",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "168-U3Q",
    "file": "temp2/2 (42).jpg",
    "title": "Figurinha 168",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "169-CU0",
    "file": "temp2/2 (43).jpg",
    "title": "Figurinha 169",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "170-AN9",
    "file": "temp2/2 (44).jpg",
    "title": "Figurinha 170",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "171-8YS",
    "file": "temp2/2 (45).jpg",
    "title": "Figurinha 171",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "172-N9K",
    "file": "temp2/2 (46).jpg",
    "title": "Figurinha 172",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "173-7OS",
    "file": "temp2/2 (47).jpg",
    "title": "Figurinha 173",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "174-81T",
    "file": "temp2/2 (48).jpg",
    "title": "Figurinha 174",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "175-NR1",
    "file": "temp2/2 (49).jpg",
    "title": "Figurinha 175",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "176-Q5G",
    "file": "temp2/2 (5).jpg",
    "title": "Figurinha 176",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "177-1IT",
    "file": "temp2/2 (50).jpg",
    "title": "Figurinha 177",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "178-XZ7",
    "file": "temp2/2 (51).jpg",
    "title": "Figurinha 178",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "179-V1F",
    "file": "temp2/2 (52).jpg",
    "title": "Figurinha 179",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "180-PFN",
    "file": "temp2/2 (53).jpg",
    "title": "Figurinha 180",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "181-GWW",
    "file": "temp2/2 (54).jpg",
    "title": "Figurinha 181",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "182-RJJ",
    "file": "temp2/2 (55).jpg",
    "title": "Figurinha 182",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "183-POZ",
    "file": "temp2/2 (56).jpg",
    "title": "Figurinha 183",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "184-1NG",
    "file": "temp2/2 (57).jpg",
    "title": "Figurinha 184",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "185-HJ4",
    "file": "temp2/2 (58).jpg",
    "title": "Figurinha 185",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "186-3K3",
    "file": "temp2/2 (59).jpg",
    "title": "Figurinha 186",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "187-GJ3",
    "file": "temp2/2 (6).jpg",
    "title": "Figurinha 187",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "188-228",
    "file": "temp2/2 (60).jpg",
    "title": "Figurinha 188",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "189-49R",
    "file": "temp2/2 (61).jpg",
    "title": "Figurinha 189",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "190-GF2",
    "file": "temp2/2 (62).jpg",
    "title": "Figurinha 190",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "191-S3G",
    "file": "temp2/2 (10).jpg",
    "title": "Figurinha 191",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "192-7BN",
    "file": "temp2/2 (100).jpg",
    "title": "Figurinha 192",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "193-G60",
    "file": "temp2/2 (101).jpg",
    "title": "Figurinha 193",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "194-PVD",
    "file": "temp2/2 (66).jpg",
    "title": "Figurinha 194",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "195-DBO",
    "file": "temp2/2 (67).jpg",
    "title": "Figurinha 195",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "196-8H1",
    "file": "temp2/2 (68).jpg",
    "title": "Figurinha 196",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "197-N25",
    "file": "temp2/2 (69).jpg",
    "title": "Figurinha 197",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "198-J13",
    "file": "temp2/2 (7).jpg",
    "title": "Figurinha 198",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "199-MGL",
    "file": "temp2/2 (70).jpg",
    "title": "Figurinha 199",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "200-9GC",
    "file": "temp2/2 (71).jpg",
    "title": "Figurinha 200",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "201-YM0",
    "file": "temp2/2 (72).jpg",
    "title": "Figurinha 201",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "202-X40",
    "file": "temp2/2 (73).jpg",
    "title": "Figurinha 202",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "203-YPQ",
    "file": "temp2/2 (74).jpg",
    "title": "Figurinha 203",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "204-ETK",
    "file": "temp2/2 (75).jpg",
    "title": "Figurinha 204",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "205-048",
    "file": "temp2/2 (76).jpg",
    "title": "Figurinha 205",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "206-N9J",
    "file": "temp2/2 (77).jpg",
    "title": "Figurinha 206",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "207-KXE",
    "file": "temp2/2 (78).jpg",
    "title": "Figurinha 207",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "208-MMZ",
    "file": "temp2/2 (79).jpg",
    "title": "Figurinha 208",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "209-3DV",
    "file": "temp2/2 (8).jpg",
    "title": "Figurinha 209",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "210-GVE",
    "file": "temp2/2 (80).jpg",
    "title": "Figurinha 210",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "211-UGV",
    "file": "temp2/2 (1).jpg",
    "title": "Figurinha 211",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "212-1BS",
    "file": "temp2/2 (82).jpg",
    "title": "Figurinha 212",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "213-YLS",
    "file": "temp2/2 (83).jpg",
    "title": "Figurinha 213",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "214-HSH",
    "file": "temp2/2 (84).jpg",
    "title": "Figurinha 214",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "215-96J",
    "file": "temp2/2 (85).jpg",
    "title": "Figurinha 215",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "216-8JL",
    "file": "temp2/2 (86).jpg",
    "title": "Figurinha 216",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "217-36O",
    "file": "temp2/2 (87).jpg",
    "title": "Figurinha 217",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "218-LQW",
    "file": "temp2/2 (88).jpg",
    "title": "Figurinha 218",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "219-0CM",
    "file": "temp2/2 (89).jpg",
    "title": "Figurinha 219",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "220-DIZ",
    "file": "temp2/2 (9).jpg",
    "title": "Figurinha 220",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "221-IIE",
    "file": "temp2/2 (90).jpg",
    "title": "Figurinha 221",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "222-PJT",
    "file": "temp2/2 (102).jpg",
    "title": "Figurinha 222",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "223-XP1",
    "file": "temp2/2 (92).jpg",
    "title": "Figurinha 223",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "224-XRM",
    "file": "temp2/2 (93).jpg",
    "title": "Figurinha 224",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "225-VTW",
    "file": "temp2/2 (94).jpg",
    "title": "Figurinha 225",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "226-EUI",
    "file": "temp2/2 (95).jpg",
    "title": "Figurinha 226",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "227-KVF",
    "file": "temp2/2 (96).jpg",
    "title": "Figurinha 227",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "228-WZT",
    "file": "temp2/2 (97).jpg",
    "title": "Figurinha 228",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "229-R3U",
    "file": "temp2/2 (98).jpg",
    "title": "Figurinha 229",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "230-6Z0",
    "file": "temp2/2 (99).jpg",
    "title": "Figurinha 230",
    "rarity": "Comum",
    "emoji": "⚪",
    "chance": 70
  },
  {
    "code": "MIT-044",
    "title": "Molejo",
    "rarity": "Mítica",
    "emoji": "🔥",
    "file": "miticas/44.mp4",
    "chance": 0
  },
  {
    "code": "MIT-045",
    "title": "O Arauto",
    "rarity": "Mítica",
    "emoji": "🔥",
    "file": "miticas/45.mp4",
    "chance": 0
  },
  {
    "code": "MIT-046",
    "title": "O Guardião",
    "rarity": "Mítica",
    "emoji": "🔥",
    "file": "miticas/46.mp4",
    "chance": 0
  },
  {
    "code": "MIT-047",
    "title": "O Profeta",
    "rarity": "Mítica",
    "emoji": "🔥",
    "file": "miticas/47.mp4",
    "chance": 0
  },
  {
    "code": "MIT-048",
    "title": "O Conquistador",
    "rarity": "Mítica",
    "emoji": "🔥",
    "file": "miticas/48.mp4",
    "chance": 0
  },
  {
    "code": "MIT-049",
    "title": "O Último Rei",
    "rarity": "Mítica",
    "emoji": "🔥",
    "file": "miticas/49.mp4",
    "chance": 0
  }
]

export default stickers
