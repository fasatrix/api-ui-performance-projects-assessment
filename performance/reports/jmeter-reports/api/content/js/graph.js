/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 520.0, "minX": 0.0, "maxY": 4267.0, "series": [{"data": [[0.0, 520.0], [0.1, 528.0], [0.2, 528.0], [0.3, 529.0], [0.4, 530.0], [0.5, 531.0], [0.6, 532.0], [0.7, 532.0], [0.8, 533.0], [0.9, 533.0], [1.0, 534.0], [1.1, 534.0], [1.2, 535.0], [1.3, 535.0], [1.4, 535.0], [1.5, 535.0], [1.6, 536.0], [1.7, 536.0], [1.8, 536.0], [1.9, 536.0], [2.0, 536.0], [2.1, 537.0], [2.2, 537.0], [2.3, 537.0], [2.4, 537.0], [2.5, 538.0], [2.6, 538.0], [2.7, 538.0], [2.8, 538.0], [2.9, 539.0], [3.0, 539.0], [3.1, 539.0], [3.2, 539.0], [3.3, 539.0], [3.4, 539.0], [3.5, 539.0], [3.6, 540.0], [3.7, 540.0], [3.8, 540.0], [3.9, 540.0], [4.0, 540.0], [4.1, 540.0], [4.2, 541.0], [4.3, 541.0], [4.4, 541.0], [4.5, 541.0], [4.6, 541.0], [4.7, 541.0], [4.8, 542.0], [4.9, 542.0], [5.0, 542.0], [5.1, 542.0], [5.2, 542.0], [5.3, 542.0], [5.4, 542.0], [5.5, 543.0], [5.6, 543.0], [5.7, 543.0], [5.8, 543.0], [5.9, 543.0], [6.0, 543.0], [6.1, 543.0], [6.2, 543.0], [6.3, 544.0], [6.4, 544.0], [6.5, 544.0], [6.6, 544.0], [6.7, 544.0], [6.8, 544.0], [6.9, 544.0], [7.0, 544.0], [7.1, 544.0], [7.2, 545.0], [7.3, 545.0], [7.4, 545.0], [7.5, 545.0], [7.6, 545.0], [7.7, 545.0], [7.8, 546.0], [7.9, 546.0], [8.0, 546.0], [8.1, 546.0], [8.2, 546.0], [8.3, 546.0], [8.4, 546.0], [8.5, 547.0], [8.6, 547.0], [8.7, 547.0], [8.8, 547.0], [8.9, 547.0], [9.0, 547.0], [9.1, 547.0], [9.2, 547.0], [9.3, 548.0], [9.4, 548.0], [9.5, 548.0], [9.6, 548.0], [9.7, 548.0], [9.8, 548.0], [9.9, 549.0], [10.0, 549.0], [10.1, 549.0], [10.2, 550.0], [10.3, 550.0], [10.4, 550.0], [10.5, 550.0], [10.6, 550.0], [10.7, 550.0], [10.8, 550.0], [10.9, 551.0], [11.0, 551.0], [11.1, 551.0], [11.2, 551.0], [11.3, 551.0], [11.4, 551.0], [11.5, 552.0], [11.6, 552.0], [11.7, 552.0], [11.8, 552.0], [11.9, 552.0], [12.0, 553.0], [12.1, 553.0], [12.2, 553.0], [12.3, 553.0], [12.4, 553.0], [12.5, 553.0], [12.6, 554.0], [12.7, 554.0], [12.8, 554.0], [12.9, 554.0], [13.0, 554.0], [13.1, 554.0], [13.2, 554.0], [13.3, 554.0], [13.4, 555.0], [13.5, 555.0], [13.6, 555.0], [13.7, 555.0], [13.8, 555.0], [13.9, 555.0], [14.0, 555.0], [14.1, 556.0], [14.2, 556.0], [14.3, 556.0], [14.4, 556.0], [14.5, 556.0], [14.6, 556.0], [14.7, 557.0], [14.8, 557.0], [14.9, 557.0], [15.0, 557.0], [15.1, 557.0], [15.2, 557.0], [15.3, 558.0], [15.4, 558.0], [15.5, 558.0], [15.6, 558.0], [15.7, 558.0], [15.8, 559.0], [15.9, 559.0], [16.0, 559.0], [16.1, 559.0], [16.2, 560.0], [16.3, 560.0], [16.4, 560.0], [16.5, 560.0], [16.6, 560.0], [16.7, 561.0], [16.8, 561.0], [16.9, 562.0], [17.0, 562.0], [17.1, 562.0], [17.2, 563.0], [17.3, 563.0], [17.4, 563.0], [17.5, 564.0], [17.6, 564.0], [17.7, 564.0], [17.8, 565.0], [17.9, 565.0], [18.0, 565.0], [18.1, 565.0], [18.2, 566.0], [18.3, 566.0], [18.4, 566.0], [18.5, 566.0], [18.6, 566.0], [18.7, 567.0], [18.8, 567.0], [18.9, 567.0], [19.0, 567.0], [19.1, 568.0], [19.2, 568.0], [19.3, 568.0], [19.4, 569.0], [19.5, 570.0], [19.6, 570.0], [19.7, 570.0], [19.8, 571.0], [19.9, 571.0], [20.0, 572.0], [20.1, 573.0], [20.2, 573.0], [20.3, 574.0], [20.4, 574.0], [20.5, 576.0], [20.6, 577.0], [20.7, 578.0], [20.8, 579.0], [20.9, 580.0], [21.0, 581.0], [21.1, 582.0], [21.2, 582.0], [21.3, 584.0], [21.4, 585.0], [21.5, 585.0], [21.6, 586.0], [21.7, 586.0], [21.8, 587.0], [21.9, 588.0], [22.0, 588.0], [22.1, 589.0], [22.2, 590.0], [22.3, 591.0], [22.4, 592.0], [22.5, 593.0], [22.6, 594.0], [22.7, 594.0], [22.8, 595.0], [22.9, 595.0], [23.0, 596.0], [23.1, 597.0], [23.2, 598.0], [23.3, 598.0], [23.4, 601.0], [23.5, 602.0], [23.6, 602.0], [23.7, 604.0], [23.8, 606.0], [23.9, 606.0], [24.0, 607.0], [24.1, 608.0], [24.2, 609.0], [24.3, 609.0], [24.4, 610.0], [24.5, 611.0], [24.6, 612.0], [24.7, 614.0], [24.8, 615.0], [24.9, 615.0], [25.0, 616.0], [25.1, 616.0], [25.2, 618.0], [25.3, 619.0], [25.4, 620.0], [25.5, 621.0], [25.6, 622.0], [25.7, 622.0], [25.8, 624.0], [25.9, 627.0], [26.0, 628.0], [26.1, 628.0], [26.2, 628.0], [26.3, 630.0], [26.4, 630.0], [26.5, 632.0], [26.6, 633.0], [26.7, 634.0], [26.8, 638.0], [26.9, 638.0], [27.0, 640.0], [27.1, 641.0], [27.2, 641.0], [27.3, 643.0], [27.4, 644.0], [27.5, 644.0], [27.6, 646.0], [27.7, 646.0], [27.8, 646.0], [27.9, 649.0], [28.0, 650.0], [28.1, 652.0], [28.2, 653.0], [28.3, 655.0], [28.4, 659.0], [28.5, 659.0], [28.6, 661.0], [28.7, 663.0], [28.8, 664.0], [28.9, 665.0], [29.0, 666.0], [29.1, 667.0], [29.2, 668.0], [29.3, 668.0], [29.4, 669.0], [29.5, 670.0], [29.6, 671.0], [29.7, 672.0], [29.8, 674.0], [29.9, 675.0], [30.0, 676.0], [30.1, 677.0], [30.2, 678.0], [30.3, 680.0], [30.4, 681.0], [30.5, 682.0], [30.6, 683.0], [30.7, 683.0], [30.8, 684.0], [30.9, 684.0], [31.0, 685.0], [31.1, 685.0], [31.2, 687.0], [31.3, 689.0], [31.4, 689.0], [31.5, 690.0], [31.6, 692.0], [31.7, 693.0], [31.8, 693.0], [31.9, 694.0], [32.0, 694.0], [32.1, 695.0], [32.2, 695.0], [32.3, 696.0], [32.4, 697.0], [32.5, 698.0], [32.6, 698.0], [32.7, 699.0], [32.8, 700.0], [32.9, 700.0], [33.0, 701.0], [33.1, 701.0], [33.2, 701.0], [33.3, 702.0], [33.4, 702.0], [33.5, 702.0], [33.6, 703.0], [33.7, 703.0], [33.8, 704.0], [33.9, 704.0], [34.0, 704.0], [34.1, 705.0], [34.2, 705.0], [34.3, 705.0], [34.4, 706.0], [34.5, 706.0], [34.6, 706.0], [34.7, 707.0], [34.8, 709.0], [34.9, 709.0], [35.0, 710.0], [35.1, 711.0], [35.2, 711.0], [35.3, 711.0], [35.4, 712.0], [35.5, 712.0], [35.6, 713.0], [35.7, 714.0], [35.8, 715.0], [35.9, 716.0], [36.0, 717.0], [36.1, 718.0], [36.2, 719.0], [36.3, 720.0], [36.4, 722.0], [36.5, 722.0], [36.6, 724.0], [36.7, 724.0], [36.8, 726.0], [36.9, 727.0], [37.0, 728.0], [37.1, 729.0], [37.2, 730.0], [37.3, 730.0], [37.4, 731.0], [37.5, 733.0], [37.6, 734.0], [37.7, 735.0], [37.8, 737.0], [37.9, 737.0], [38.0, 738.0], [38.1, 740.0], [38.2, 742.0], [38.3, 743.0], [38.4, 743.0], [38.5, 745.0], [38.6, 747.0], [38.7, 749.0], [38.8, 750.0], [38.9, 751.0], [39.0, 754.0], [39.1, 755.0], [39.2, 756.0], [39.3, 757.0], [39.4, 757.0], [39.5, 760.0], [39.6, 761.0], [39.7, 763.0], [39.8, 764.0], [39.9, 764.0], [40.0, 765.0], [40.1, 766.0], [40.2, 766.0], [40.3, 767.0], [40.4, 767.0], [40.5, 768.0], [40.6, 769.0], [40.7, 772.0], [40.8, 772.0], [40.9, 773.0], [41.0, 774.0], [41.1, 775.0], [41.2, 775.0], [41.3, 776.0], [41.4, 777.0], [41.5, 778.0], [41.6, 778.0], [41.7, 779.0], [41.8, 780.0], [41.9, 780.0], [42.0, 781.0], [42.1, 782.0], [42.2, 782.0], [42.3, 784.0], [42.4, 784.0], [42.5, 784.0], [42.6, 785.0], [42.7, 785.0], [42.8, 786.0], [42.9, 787.0], [43.0, 788.0], [43.1, 788.0], [43.2, 789.0], [43.3, 789.0], [43.4, 790.0], [43.5, 791.0], [43.6, 791.0], [43.7, 792.0], [43.8, 792.0], [43.9, 793.0], [44.0, 793.0], [44.1, 793.0], [44.2, 795.0], [44.3, 795.0], [44.4, 795.0], [44.5, 796.0], [44.6, 797.0], [44.7, 798.0], [44.8, 798.0], [44.9, 799.0], [45.0, 800.0], [45.1, 800.0], [45.2, 800.0], [45.3, 801.0], [45.4, 801.0], [45.5, 801.0], [45.6, 801.0], [45.7, 802.0], [45.8, 803.0], [45.9, 803.0], [46.0, 804.0], [46.1, 805.0], [46.2, 805.0], [46.3, 806.0], [46.4, 806.0], [46.5, 807.0], [46.6, 808.0], [46.7, 809.0], [46.8, 810.0], [46.9, 811.0], [47.0, 813.0], [47.1, 814.0], [47.2, 814.0], [47.3, 817.0], [47.4, 817.0], [47.5, 819.0], [47.6, 820.0], [47.7, 821.0], [47.8, 823.0], [47.9, 823.0], [48.0, 824.0], [48.1, 825.0], [48.2, 825.0], [48.3, 826.0], [48.4, 827.0], [48.5, 829.0], [48.6, 831.0], [48.7, 831.0], [48.8, 831.0], [48.9, 832.0], [49.0, 833.0], [49.1, 835.0], [49.2, 837.0], [49.3, 838.0], [49.4, 840.0], [49.5, 840.0], [49.6, 842.0], [49.7, 844.0], [49.8, 844.0], [49.9, 845.0], [50.0, 845.0], [50.1, 846.0], [50.2, 847.0], [50.3, 848.0], [50.4, 850.0], [50.5, 851.0], [50.6, 851.0], [50.7, 853.0], [50.8, 854.0], [50.9, 858.0], [51.0, 860.0], [51.1, 861.0], [51.2, 862.0], [51.3, 864.0], [51.4, 866.0], [51.5, 868.0], [51.6, 869.0], [51.7, 870.0], [51.8, 871.0], [51.9, 875.0], [52.0, 878.0], [52.1, 879.0], [52.2, 880.0], [52.3, 882.0], [52.4, 884.0], [52.5, 884.0], [52.6, 885.0], [52.7, 887.0], [52.8, 890.0], [52.9, 891.0], [53.0, 892.0], [53.1, 893.0], [53.2, 895.0], [53.3, 899.0], [53.4, 901.0], [53.5, 901.0], [53.6, 902.0], [53.7, 902.0], [53.8, 906.0], [53.9, 907.0], [54.0, 907.0], [54.1, 909.0], [54.2, 911.0], [54.3, 912.0], [54.4, 914.0], [54.5, 915.0], [54.6, 917.0], [54.7, 918.0], [54.8, 920.0], [54.9, 922.0], [55.0, 923.0], [55.1, 924.0], [55.2, 926.0], [55.3, 926.0], [55.4, 929.0], [55.5, 929.0], [55.6, 932.0], [55.7, 932.0], [55.8, 935.0], [55.9, 937.0], [56.0, 938.0], [56.1, 939.0], [56.2, 943.0], [56.3, 944.0], [56.4, 948.0], [56.5, 951.0], [56.6, 953.0], [56.7, 956.0], [56.8, 956.0], [56.9, 958.0], [57.0, 959.0], [57.1, 961.0], [57.2, 966.0], [57.3, 971.0], [57.4, 975.0], [57.5, 978.0], [57.6, 981.0], [57.7, 982.0], [57.8, 984.0], [57.9, 984.0], [58.0, 985.0], [58.1, 988.0], [58.2, 990.0], [58.3, 992.0], [58.4, 992.0], [58.5, 994.0], [58.6, 995.0], [58.7, 996.0], [58.8, 999.0], [58.9, 999.0], [59.0, 1000.0], [59.1, 1001.0], [59.2, 1002.0], [59.3, 1004.0], [59.4, 1007.0], [59.5, 1013.0], [59.6, 1014.0], [59.7, 1016.0], [59.8, 1021.0], [59.9, 1023.0], [60.0, 1024.0], [60.1, 1025.0], [60.2, 1027.0], [60.3, 1029.0], [60.4, 1033.0], [60.5, 1037.0], [60.6, 1041.0], [60.7, 1043.0], [60.8, 1046.0], [60.9, 1054.0], [61.0, 1055.0], [61.1, 1057.0], [61.2, 1059.0], [61.3, 1061.0], [61.4, 1067.0], [61.5, 1070.0], [61.6, 1072.0], [61.7, 1074.0], [61.8, 1076.0], [61.9, 1079.0], [62.0, 1081.0], [62.1, 1081.0], [62.2, 1083.0], [62.3, 1086.0], [62.4, 1088.0], [62.5, 1089.0], [62.6, 1091.0], [62.7, 1093.0], [62.8, 1095.0], [62.9, 1096.0], [63.0, 1100.0], [63.1, 1102.0], [63.2, 1107.0], [63.3, 1108.0], [63.4, 1111.0], [63.5, 1111.0], [63.6, 1115.0], [63.7, 1117.0], [63.8, 1118.0], [63.9, 1123.0], [64.0, 1124.0], [64.1, 1125.0], [64.2, 1131.0], [64.3, 1137.0], [64.4, 1137.0], [64.5, 1141.0], [64.6, 1142.0], [64.7, 1145.0], [64.8, 1145.0], [64.9, 1147.0], [65.0, 1150.0], [65.1, 1156.0], [65.2, 1167.0], [65.3, 1169.0], [65.4, 1169.0], [65.5, 1172.0], [65.6, 1174.0], [65.7, 1175.0], [65.8, 1178.0], [65.9, 1179.0], [66.0, 1182.0], [66.1, 1183.0], [66.2, 1189.0], [66.3, 1192.0], [66.4, 1194.0], [66.5, 1200.0], [66.6, 1204.0], [66.7, 1207.0], [66.8, 1214.0], [66.9, 1217.0], [67.0, 1226.0], [67.1, 1229.0], [67.2, 1229.0], [67.3, 1232.0], [67.4, 1234.0], [67.5, 1238.0], [67.6, 1241.0], [67.7, 1245.0], [67.8, 1248.0], [67.9, 1248.0], [68.0, 1250.0], [68.1, 1258.0], [68.2, 1259.0], [68.3, 1263.0], [68.4, 1268.0], [68.5, 1269.0], [68.6, 1272.0], [68.7, 1276.0], [68.8, 1281.0], [68.9, 1283.0], [69.0, 1284.0], [69.1, 1291.0], [69.2, 1294.0], [69.3, 1297.0], [69.4, 1298.0], [69.5, 1299.0], [69.6, 1301.0], [69.7, 1304.0], [69.8, 1304.0], [69.9, 1306.0], [70.0, 1307.0], [70.1, 1309.0], [70.2, 1312.0], [70.3, 1312.0], [70.4, 1313.0], [70.5, 1315.0], [70.6, 1315.0], [70.7, 1323.0], [70.8, 1326.0], [70.9, 1327.0], [71.0, 1331.0], [71.1, 1332.0], [71.2, 1334.0], [71.3, 1336.0], [71.4, 1338.0], [71.5, 1340.0], [71.6, 1343.0], [71.7, 1344.0], [71.8, 1346.0], [71.9, 1348.0], [72.0, 1350.0], [72.1, 1352.0], [72.2, 1354.0], [72.3, 1355.0], [72.4, 1356.0], [72.5, 1360.0], [72.6, 1361.0], [72.7, 1363.0], [72.8, 1370.0], [72.9, 1373.0], [73.0, 1376.0], [73.1, 1378.0], [73.2, 1380.0], [73.3, 1381.0], [73.4, 1386.0], [73.5, 1389.0], [73.6, 1391.0], [73.7, 1394.0], [73.8, 1396.0], [73.9, 1399.0], [74.0, 1400.0], [74.1, 1403.0], [74.2, 1406.0], [74.3, 1409.0], [74.4, 1410.0], [74.5, 1413.0], [74.6, 1416.0], [74.7, 1419.0], [74.8, 1420.0], [74.9, 1423.0], [75.0, 1426.0], [75.1, 1435.0], [75.2, 1437.0], [75.3, 1438.0], [75.4, 1441.0], [75.5, 1443.0], [75.6, 1455.0], [75.7, 1459.0], [75.8, 1465.0], [75.9, 1470.0], [76.0, 1473.0], [76.1, 1478.0], [76.2, 1480.0], [76.3, 1481.0], [76.4, 1491.0], [76.5, 1492.0], [76.6, 1493.0], [76.7, 1496.0], [76.8, 1502.0], [76.9, 1510.0], [77.0, 1511.0], [77.1, 1517.0], [77.2, 1520.0], [77.3, 1521.0], [77.4, 1521.0], [77.5, 1523.0], [77.6, 1526.0], [77.7, 1528.0], [77.8, 1530.0], [77.9, 1536.0], [78.0, 1541.0], [78.1, 1543.0], [78.2, 1546.0], [78.3, 1551.0], [78.4, 1556.0], [78.5, 1565.0], [78.6, 1569.0], [78.7, 1576.0], [78.8, 1579.0], [78.9, 1581.0], [79.0, 1585.0], [79.1, 1587.0], [79.2, 1590.0], [79.3, 1592.0], [79.4, 1593.0], [79.5, 1598.0], [79.6, 1602.0], [79.7, 1609.0], [79.8, 1614.0], [79.9, 1618.0], [80.0, 1625.0], [80.1, 1629.0], [80.2, 1634.0], [80.3, 1642.0], [80.4, 1643.0], [80.5, 1647.0], [80.6, 1654.0], [80.7, 1655.0], [80.8, 1657.0], [80.9, 1661.0], [81.0, 1661.0], [81.1, 1664.0], [81.2, 1665.0], [81.3, 1667.0], [81.4, 1669.0], [81.5, 1674.0], [81.6, 1681.0], [81.7, 1683.0], [81.8, 1688.0], [81.9, 1691.0], [82.0, 1693.0], [82.1, 1696.0], [82.2, 1697.0], [82.3, 1705.0], [82.4, 1711.0], [82.5, 1713.0], [82.6, 1717.0], [82.7, 1725.0], [82.8, 1726.0], [82.9, 1729.0], [83.0, 1731.0], [83.1, 1732.0], [83.2, 1735.0], [83.3, 1737.0], [83.4, 1740.0], [83.5, 1742.0], [83.6, 1745.0], [83.7, 1748.0], [83.8, 1749.0], [83.9, 1751.0], [84.0, 1751.0], [84.1, 1754.0], [84.2, 1756.0], [84.3, 1758.0], [84.4, 1760.0], [84.5, 1764.0], [84.6, 1767.0], [84.7, 1768.0], [84.8, 1772.0], [84.9, 1776.0], [85.0, 1778.0], [85.1, 1779.0], [85.2, 1782.0], [85.3, 1785.0], [85.4, 1788.0], [85.5, 1794.0], [85.6, 1796.0], [85.7, 1801.0], [85.8, 1808.0], [85.9, 1809.0], [86.0, 1812.0], [86.1, 1813.0], [86.2, 1821.0], [86.3, 1830.0], [86.4, 1833.0], [86.5, 1845.0], [86.6, 1849.0], [86.7, 1853.0], [86.8, 1864.0], [86.9, 1868.0], [87.0, 1873.0], [87.1, 1875.0], [87.2, 1878.0], [87.3, 1884.0], [87.4, 1885.0], [87.5, 1887.0], [87.6, 1890.0], [87.7, 1901.0], [87.8, 1905.0], [87.9, 1906.0], [88.0, 1907.0], [88.1, 1921.0], [88.2, 1926.0], [88.3, 1929.0], [88.4, 1935.0], [88.5, 1936.0], [88.6, 1940.0], [88.7, 1943.0], [88.8, 1944.0], [88.9, 1946.0], [89.0, 1949.0], [89.1, 1958.0], [89.2, 1959.0], [89.3, 1965.0], [89.4, 1973.0], [89.5, 1991.0], [89.6, 1996.0], [89.7, 2008.0], [89.8, 2009.0], [89.9, 2013.0], [90.0, 2014.0], [90.1, 2029.0], [90.2, 2035.0], [90.3, 2048.0], [90.4, 2054.0], [90.5, 2057.0], [90.6, 2059.0], [90.7, 2063.0], [90.8, 2074.0], [90.9, 2083.0], [91.0, 2091.0], [91.1, 2102.0], [91.2, 2108.0], [91.3, 2110.0], [91.4, 2126.0], [91.5, 2130.0], [91.6, 2138.0], [91.7, 2143.0], [91.8, 2148.0], [91.9, 2150.0], [92.0, 2171.0], [92.1, 2181.0], [92.2, 2205.0], [92.3, 2206.0], [92.4, 2208.0], [92.5, 2219.0], [92.6, 2221.0], [92.7, 2223.0], [92.8, 2226.0], [92.9, 2234.0], [93.0, 2249.0], [93.1, 2253.0], [93.2, 2280.0], [93.3, 2285.0], [93.4, 2287.0], [93.5, 2289.0], [93.6, 2299.0], [93.7, 2305.0], [93.8, 2306.0], [93.9, 2308.0], [94.0, 2316.0], [94.1, 2325.0], [94.2, 2329.0], [94.3, 2338.0], [94.4, 2343.0], [94.5, 2344.0], [94.6, 2363.0], [94.7, 2364.0], [94.8, 2377.0], [94.9, 2393.0], [95.0, 2400.0], [95.1, 2403.0], [95.2, 2409.0], [95.3, 2421.0], [95.4, 2440.0], [95.5, 2444.0], [95.6, 2454.0], [95.7, 2459.0], [95.8, 2466.0], [95.9, 2474.0], [96.0, 2477.0], [96.1, 2481.0], [96.2, 2499.0], [96.3, 2504.0], [96.4, 2506.0], [96.5, 2509.0], [96.6, 2512.0], [96.7, 2522.0], [96.8, 2527.0], [96.9, 2563.0], [97.0, 2582.0], [97.1, 2596.0], [97.2, 2598.0], [97.3, 2613.0], [97.4, 2620.0], [97.5, 2639.0], [97.6, 2646.0], [97.7, 2674.0], [97.8, 2680.0], [97.9, 2699.0], [98.0, 2762.0], [98.1, 2768.0], [98.2, 2780.0], [98.3, 2782.0], [98.4, 2810.0], [98.5, 2875.0], [98.6, 2919.0], [98.7, 2938.0], [98.8, 2944.0], [98.9, 2970.0], [99.0, 3051.0], [99.1, 3076.0], [99.2, 3142.0], [99.3, 3264.0], [99.4, 3341.0], [99.5, 3456.0], [99.6, 3696.0], [99.7, 3785.0], [99.8, 3821.0], [99.9, 4167.0]], "isOverall": false, "label": "GET Home Page - Demoblaze shop", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 557.0, "series": [{"data": [[600.0, 225.0], [700.0, 291.0], [800.0, 199.0], [900.0, 134.0], [1000.0, 96.0], [1100.0, 84.0], [1200.0, 72.0], [1300.0, 105.0], [1400.0, 68.0], [1500.0, 67.0], [1600.0, 64.0], [1700.0, 81.0], [1800.0, 48.0], [1900.0, 46.0], [2000.0, 35.0], [2100.0, 26.0], [2200.0, 35.0], [2300.0, 32.0], [2400.0, 30.0], [2500.0, 24.0], [2600.0, 17.0], [2700.0, 9.0], [2800.0, 6.0], [2900.0, 8.0], [3000.0, 6.0], [3100.0, 2.0], [3300.0, 2.0], [3200.0, 3.0], [3400.0, 3.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4200.0, 2.0], [4100.0, 1.0], [500.0, 557.0]], "isOverall": false, "label": "GET Home Page - Demoblaze shop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 554.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1831.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1831.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 554.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.611111111111112, "minX": 1.63193718E12, "maxY": 107.64963814389115, "series": [{"data": [[1.63193718E12, 107.64963814389115], [1.63193724E12, 8.611111111111112]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63193724E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 538.8695652173914, "minX": 1.0, "maxY": 3259.0, "series": [{"data": [[2.0, 621.0], [3.0, 547.0], [4.0, 563.0], [5.0, 677.0], [6.0, 563.0], [7.0, 541.0], [8.0, 550.0], [9.0, 538.8695652173914], [10.0, 564.5415549597855], [11.0, 610.5187969924813], [12.0, 698.2549019607845], [13.0, 723.4285714285716], [14.0, 964.3636363636364], [15.0, 790.4166666666666], [16.0, 838.3333333333334], [17.0, 1462.5], [18.0, 1269.6666666666667], [19.0, 2364.0], [20.0, 2448.5], [21.0, 3076.0], [22.0, 1049.5], [23.0, 1161.0], [24.0, 908.2], [25.0, 1399.6666666666667], [26.0, 681.0], [27.0, 1846.3333333333333], [28.0, 1023.5], [29.0, 1422.0], [30.0, 1145.25], [31.0, 1397.3333333333333], [32.0, 1557.5], [33.0, 1158.0], [34.0, 1187.0], [35.0, 1886.6666666666667], [36.0, 931.2857142857143], [37.0, 2440.0], [38.0, 747.8333333333334], [39.0, 1529.25], [40.0, 613.0], [41.0, 1168.7142857142856], [43.0, 780.5], [42.0, 2380.0], [44.0, 1351.0], [45.0, 1625.0], [46.0, 1189.25], [47.0, 2181.0], [48.0, 918.9000000000001], [49.0, 1204.25], [51.0, 1073.6666666666667], [50.0, 796.0], [53.0, 677.4], [52.0, 1559.5], [54.0, 1051.375], [55.0, 1747.0], [56.0, 1396.0], [57.0, 1105.6666666666667], [58.0, 1267.7142857142858], [59.0, 929.5], [60.0, 1402.0], [61.0, 1217.0], [63.0, 813.8333333333334], [62.0, 1361.0], [64.0, 762.8], [66.0, 909.4285714285714], [67.0, 1329.0], [68.0, 1222.2222222222222], [69.0, 961.9090909090909], [70.0, 954.1666666666667], [71.0, 1012.125], [73.0, 1107.625], [74.0, 1000.5], [75.0, 1310.5], [72.0, 3259.0], [76.0, 901.2857142857143], [78.0, 977.625], [79.0, 841.7777777777778], [77.0, 1788.0], [80.0, 1113.75], [81.0, 889.9090909090909], [82.0, 1072.0], [83.0, 1079.5], [84.0, 1204.142857142857], [85.0, 1384.6], [86.0, 1094.3333333333333], [87.0, 1036.9], [88.0, 1116.8], [89.0, 1013.125], [90.0, 753.2], [91.0, 915.3333333333334], [92.0, 1151.0], [93.0, 844.8571428571428], [94.0, 990.25], [95.0, 985.3333333333334], [96.0, 1141.2857142857142], [97.0, 1077.2], [98.0, 894.8571428571428], [99.0, 1244.75], [100.0, 1068.5], [101.0, 1056.0], [102.0, 1062.7], [103.0, 1016.1666666666667], [104.0, 1034.2], [105.0, 838.2857142857143], [106.0, 1053.1], [107.0, 1022.8], [108.0, 962.2857142857142], [109.0, 940.9], [110.0, 1350.1666666666665], [111.0, 952.5], [112.0, 1171.0], [113.0, 1030.5], [114.0, 922.8888888888889], [115.0, 984.4], [116.0, 1027.6], [117.0, 869.7], [118.0, 870.4], [119.0, 953.818181818182], [120.0, 1593.8], [121.0, 971.375], [122.0, 833.8], [123.0, 1174.0], [124.0, 1050.875], [125.0, 990.8666666666667], [126.0, 1065.5], [127.0, 1035.0], [128.0, 1098.4615384615386], [129.0, 1032.0], [130.0, 1466.0], [131.0, 1275.6666666666665], [132.0, 1356.2], [133.0, 1167.4], [134.0, 1039.8999999999999], [135.0, 1332.0], [136.0, 1324.111111111111], [137.0, 963.2], [138.0, 934.0], [139.0, 1331.857142857143], [140.0, 1066.5], [141.0, 1529.888888888889], [142.0, 1132.3333333333333], [143.0, 1342.1666666666667], [144.0, 1622.7777777777776], [145.0, 1249.6666666666667], [146.0, 1234.5714285714287], [147.0, 1170.0], [148.0, 1265.7500000000002], [149.0, 1141.7777777777776], [150.0, 1136.5714285714287], [151.0, 1215.25], [152.0, 1216.888888888889], [153.0, 1381.5714285714284], [154.0, 1341.25], [155.0, 1376.5], [156.0, 1132.888888888889], [157.0, 1417.5714285714287], [158.0, 1601.7], [159.0, 1371.111111111111], [160.0, 1222.857142857143], [161.0, 1260.5714285714287], [162.0, 1413.3333333333335], [163.0, 1584.5714285714287], [164.0, 1460.6666666666665], [165.0, 1392.8], [166.0, 1343.3333333333335], [167.0, 1445.7], [168.0, 1121.25], [169.0, 1374.0], [170.0, 1097.0], [171.0, 1454.6], [172.0, 1175.4444444444443], [173.0, 1504.0], [174.0, 1484.75], [175.0, 1364.1111111111113], [176.0, 1054.1666666666665], [177.0, 1416.2], [178.0, 1169.8571428571427], [179.0, 1477.25], [180.0, 1379.1000000000001], [181.0, 1368.0], [182.0, 1489.2857142857142], [183.0, 1745.0000000000002], [184.0, 1420.2857142857144], [185.0, 1320.375], [186.0, 1703.8333333333335], [187.0, 1404.8750000000002], [188.0, 1338.0000000000002], [189.0, 1380.888888888889], [190.0, 1547.7777777777778], [191.0, 1477.5], [192.0, 1398.5714285714287], [193.0, 1600.8888888888887], [194.0, 1710.142857142857], [195.0, 1581.875], [196.0, 1684.5714285714284], [197.0, 1362.4999999999998], [198.0, 1500.4444444444443], [199.0, 1437.2222222222224], [200.0, 1474.75], [201.0, 1364.375], [202.0, 1425.5], [203.0, 1458.25], [204.0, 1470.2], [205.0, 1269.909090909091], [206.0, 1296.75], [207.0, 1504.7500000000002], [208.0, 1562.2222222222222], [209.0, 1801.2857142857144], [210.0, 1464.4545454545455], [211.0, 1533.7777777777778], [212.0, 1378.9999999999998], [213.0, 1386.0], [214.0, 1543.875], [215.0, 1547.7777777777778], [216.0, 2125.5], [217.0, 1729.0], [218.0, 1220.75], [219.0, 1742.7142857142858], [220.0, 1578.090909090909], [221.0, 1802.2857142857144], [222.0, 1815.25], [223.0, 1256.5714285714287], [224.0, 1863.888888888889], [225.0, 1662.2857142857144], [226.0, 1835.1818181818185], [227.0, 1557.142857142857], [228.0, 1777.1666666666665], [229.0, 1310.7], [230.0, 1883.3999999999999], [231.0, 1881.8], [232.0, 1729.7], [233.0, 1757.25], [234.0, 1687.8333333333335], [235.0, 1705.1250000000002], [236.0, 1783.0], [237.0, 1849.9999999999998], [238.0, 1833.7777777777778], [239.0, 2113.6666666666665], [240.0, 1689.666666666667], [241.0, 1708.75], [242.0, 1913.7142857142858], [243.0, 1977.5], [244.0, 1866.5555555555557], [245.0, 2213.125], [246.0, 1835.7499999999998], [247.0, 1757.5555555555557], [248.0, 1713.6666666666667], [249.0, 1668.4285714285716], [250.0, 1828.2727272727273], [251.0, 1767.8], [1.0, 570.0]], "isOverall": false, "label": "GET Home Page - Demoblaze shop", "isController": false}, {"data": [[106.1547169811322, 1107.3475890985308]], "isOverall": false, "label": "GET Home Page - Demoblaze shop-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 251.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 76.2, "minX": 1.63193718E12, "maxY": 114749.18333333333, "series": [{"data": [[1.63193718E12, 114749.18333333333], [1.63193724E12, 1758.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63193718E12, 4972.05], [1.63193724E12, 76.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63193724E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 560.5555555555555, "minX": 1.63193718E12, "maxY": 1115.7275436355878, "series": [{"data": [[1.63193718E12, 1115.7275436355878], [1.63193724E12, 560.5555555555555]], "isOverall": false, "label": "GET Home Page - Demoblaze shop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63193724E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 558.4444444444446, "minX": 1.63193718E12, "maxY": 1113.6628352490447, "series": [{"data": [[1.63193718E12, 1113.6628352490447], [1.63193724E12, 558.4444444444446]], "isOverall": false, "label": "GET Home Page - Demoblaze shop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63193724E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 178.9444444444444, "minX": 1.63193718E12, "maxY": 191.337164750958, "series": [{"data": [[1.63193718E12, 191.337164750958], [1.63193724E12, 178.9444444444444]], "isOverall": false, "label": "GET Home Page - Demoblaze shop", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63193724E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 520.0, "minX": 1.63193718E12, "maxY": 4267.0, "series": [{"data": [[1.63193718E12, 4267.0], [1.63193724E12, 711.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63193718E12, 2033.0], [1.63193724E12, 597.9000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63193718E12, 3061.5], [1.63193724E12, 711.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63193718E12, 2402.5], [1.63193724E12, 682.0999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63193718E12, 520.0], [1.63193724E12, 529.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63193718E12, 853.0], [1.63193724E12, 550.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63193724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 551.0, "minX": 2.0, "maxY": 2271.5, "series": [{"data": [[2.0, 849.0], [39.0, 680.0], [13.0, 779.0], [57.0, 697.0], [14.0, 551.0], [15.0, 571.0], [16.0, 552.5], [17.0, 553.0], [18.0, 557.0], [77.0, 710.0], [19.0, 595.0], [20.0, 741.5], [98.0, 718.5], [107.0, 1260.0], [109.0, 797.0], [111.0, 1054.0], [108.0, 2271.5], [115.0, 1144.0], [28.0, 671.5], [118.0, 1276.5], [119.0, 1809.0], [123.0, 1344.0], [121.0, 1812.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 123.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 549.0, "minX": 2.0, "maxY": 2269.0, "series": [{"data": [[2.0, 846.5], [39.0, 680.0], [13.0, 732.0], [57.0, 696.0], [14.0, 549.0], [15.0, 570.0], [16.0, 551.0], [17.0, 550.0], [18.0, 554.5], [77.0, 708.0], [19.0, 594.0], [20.0, 741.0], [98.0, 716.0], [107.0, 1257.0], [109.0, 795.0], [111.0, 1052.0], [108.0, 2269.0], [115.0, 1142.0], [28.0, 669.5], [118.0, 1276.5], [119.0, 1806.0], [123.0, 1342.0], [121.0, 1810.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 123.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.63193718E12, "maxY": 39.31666666666667, "series": [{"data": [[1.63193718E12, 39.31666666666667], [1.63193724E12, 0.43333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63193724E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6, "minX": 1.63193718E12, "maxY": 39.15, "series": [{"data": [[1.63193718E12, 39.15], [1.63193724E12, 0.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63193724E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.6, "minX": 1.63193718E12, "maxY": 39.15, "series": [{"data": [[1.63193718E12, 39.15], [1.63193724E12, 0.6]], "isOverall": false, "label": "GET Home Page - Demoblaze shop-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63193724E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.6, "minX": 1.63193718E12, "maxY": 39.15, "series": [{"data": [[1.63193718E12, 39.15], [1.63193724E12, 0.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63193724E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
