'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import MapView from 'react-native-maps';
import { ScrollView } from 'react-native';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

import flagBlueImg from './assets/images/shuttlesmall.png';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

const joeyRoute = [
{latitude: 42.405804, longitude: -71.11956},
{latitude: 42.405838, longitude: -71.11953},
{ latitude: 42.4057, longitude: -71.119195},
{ latitude: 42.405662, longitude: -71.119103},
{ latitude: 42.405559, longitude: -71.118584},
{ latitude: 42.405555, longitude: -71.11834},
{ latitude: 42.405555, longitude: -71.118279},
{ latitude: 42.405555, longitude: -71.118264},
{ latitude: 42.405559, longitude: -71.118134},
{ latitude: 42.405574, longitude: -71.118012},
{ latitude: 42.405574, longitude: -71.118012},
{ latitude: 42.405639, longitude: -71.117447},
{ latitude: 42.405433, longitude: -71.117409},
{ latitude: 42.40533, longitude: -71.117394},
{ latitude: 42.404853, longitude: -71.117325},
{ latitude: 42.404014, longitude: -71.117203},
{ latitude: 42.403877, longitude: -71.11718},
{ latitude: 42.403842, longitude: -71.117173},
{ latitude: 42.403335, longitude: -71.117089},
{ latitude: 42.402729, longitude: -71.116997},
{ latitude: 42.402038, longitude: -71.116921},
{ latitude: 42.401943, longitude: -71.116898},
{ latitude: 42.401943, longitude: -71.116898},
{ latitude: 42.40158, longitude: -71.116829},
{ latitude: 42.401447, longitude: -71.11686},
{ latitude: 42.401332, longitude: -71.116936},
{ latitude: 42.401294, longitude: -71.116997},
{ latitude: 42.401248, longitude: -71.117028},
{ latitude: 42.401176, longitude: -71.117074},
{ latitude: 42.401103, longitude: -71.117074},
{ latitude: 42.401042, longitude: -71.117051},
{ latitude: 42.400985, longitude: -71.117005},
{ latitude: 42.400981, longitude: -71.116997},
{ latitude: 42.400974, longitude: -71.116982},
{ latitude: 42.400814, longitude: -71.117112},
{ latitude: 42.400737, longitude: -71.117142},
{ latitude: 42.400684, longitude: -71.117165},
{ latitude: 42.400588, longitude: -71.117226},
{ latitude: 42.400371, longitude: -71.117539},
{ latitude: 42.400119, longitude: -71.11789},
{ latitude: 42.399902, longitude: -71.118218},
{ latitude: 42.399894, longitude: -71.118226},
{ latitude: 42.399684, longitude: -71.118516},
{ latitude: 42.399433, longitude: -71.118912},
{ latitude: 42.399219, longitude: -71.119362},
{ latitude: 42.399066, longitude: -71.119729},
{ latitude: 42.39904, longitude: -71.119782},
{ latitude: 42.398712, longitude: -71.120568},
{ latitude: 42.398609, longitude: -71.120743},
{ latitude: 42.398529, longitude: -71.120896},
{ latitude: 42.398387, longitude: -71.121087},
{ latitude: 42.398265, longitude: -71.121232},
{ latitude: 42.398132, longitude: -71.121316},
{ latitude: 42.39793, longitude: -71.12143},
{ latitude: 42.397544, longitude: -71.121651},
{ latitude: 42.397472, longitude: -71.121689},
{ latitude: 42.397026, longitude: -71.121964},
{ latitude: 42.396728, longitude: -71.122155},
{ latitude: 42.39672, longitude: -71.122162},
{ latitude: 42.396701, longitude: -71.122178},
{ latitude: 42.396682, longitude: -71.122185},
{ latitude: 42.396575, longitude: -71.122254},
{ latitude: 42.396575, longitude: -71.122254},
{ latitude: 42.396488, longitude: -71.122307},
{ latitude: 42.396625, longitude: -71.122559},
{ latitude: 42.396808, longitude: -71.12278},
{ latitude: 42.397022, longitude: -71.122933},
{ latitude: 42.397087, longitude: -71.122979},
{ latitude: 42.397212, longitude: -71.123093},
{ latitude: 42.397342, longitude: -71.1232},
{ latitude: 42.397342, longitude: -71.1232},
{ latitude: 42.39764, longitude: -71.123452},
{ latitude: 42.397708, longitude: -71.123505},
{ latitude: 42.397918, longitude: -71.123673},
{ latitude: 42.398174, longitude: -71.123887},
{ latitude: 42.398517, longitude: -71.124161},
{ latitude: 42.399032, longitude: -71.124566},
{ latitude: 42.399162, longitude: -71.12468},
{ latitude: 42.399459, longitude: -71.124917},
{ latitude: 42.399856, longitude: -71.125237},
{ latitude: 42.400405, longitude: -71.125672},
{ latitude: 42.400424, longitude: -71.125687},
{ latitude: 42.400356, longitude: -71.125763},
{ latitude: 42.400356, longitude: -71.125763},
{ latitude: 42.400424, longitude: -71.125687},
{ latitude: 42.401039, longitude: -71.126145},
{ latitude: 42.401054, longitude: -71.12616},
{ latitude: 42.401138, longitude: -71.126198},
{ latitude: 42.401771, longitude: -71.126503},
{ latitude: 42.402431, longitude: -71.126786},
{ latitude: 42.402824, longitude: -71.126977},
{ latitude: 42.402824, longitude: -71.126977},
{ latitude: 42.402877, longitude: -71.126999},
{ latitude: 42.402931, longitude: -71.126984},
{ latitude: 42.402976, longitude: -71.1269},
{ latitude: 42.403015, longitude: -71.126816},
{ latitude: 42.403022, longitude: -71.126725},
{ latitude: 42.402996, longitude: -71.126587},
{ latitude: 42.402946, longitude: -71.126473},
{ latitude: 42.402637, longitude: -71.125748},
{ latitude: 42.402629, longitude: -71.125718},
{ latitude: 42.402355, longitude: -71.125115},
{ latitude: 42.402282, longitude: -71.124947},
{ latitude: 42.40224, longitude: -71.12484},
{ latitude: 42.40203, longitude: -71.124329},
{ latitude: 42.401851, longitude: -71.123742},
{ latitude: 42.401638, longitude: -71.122941},
{ latitude: 42.401557, longitude: -71.122628},
{ latitude: 42.401454, longitude: -71.122216},
{ latitude: 42.401329, longitude: -71.12175},
{ latitude: 42.401264, longitude: -71.121445},
{ latitude: 42.401096, longitude: -71.120728},
{ latitude: 42.40092, longitude: -71.120003},
{ latitude: 42.40092, longitude: -71.120003},
{ latitude: 42.400909, longitude: -71.119957},
{ latitude: 42.400897, longitude: -71.119896},
{ latitude: 42.400844, longitude: -71.119576},
{ latitude: 42.400798, longitude: -71.119088},
{ latitude: 42.400798, longitude: -71.119011},
{ latitude: 42.400794, longitude: -71.11876},
{ latitude: 42.400825, longitude: -71.118088},
{ latitude: 42.400859, longitude: -71.117325},
{ latitude: 42.400871, longitude: -71.117241},
{ latitude: 42.400981, longitude: -71.116997},
{ latitude: 42.400974, longitude: -71.116982},
{ latitude: 42.400936, longitude: -71.116921},
{ latitude: 42.400905, longitude: -71.116692},
{ latitude: 42.400909, longitude: -71.116684},
{ latitude: 42.40092, longitude: -71.116669},
{ latitude: 42.401004, longitude: -71.116494},
{ latitude: 42.401081, longitude: -71.11644},
{ latitude: 42.401123, longitude: -71.116433},
{ latitude: 42.401161, longitude: -71.116433},
{ latitude: 42.401187, longitude: -71.11644},
{ latitude: 42.401218, longitude: -71.116448},
{ latitude: 42.40126, longitude: -71.116478},
{ latitude: 42.40129, longitude: -71.116509},
{ latitude: 42.401313, longitude: -71.11654},
{ latitude: 42.401382, longitude: -71.116608},
{ latitude: 42.401439, longitude: -71.116669},
{ latitude: 42.40158, longitude: -71.116829},
{ latitude: 42.402038, longitude: -71.116921},
{ latitude: 42.402729, longitude: -71.116997},
{ latitude: 42.403335, longitude: -71.117089},
{ latitude: 42.403842, longitude: -71.117173},
{ latitude: 42.403877, longitude: -71.11718},
{ latitude: 42.404014, longitude: -71.117203},
{ latitude: 42.404853, longitude: -71.117325},
{ latitude: 42.404773, longitude: -71.117943},
{ latitude: 42.404769, longitude: -71.118004},
{ latitude: 42.404754, longitude: -71.118294},
{ latitude: 42.404758, longitude: -71.118363},
{ latitude: 42.404758, longitude: -71.118363},
{ latitude: 42.404762, longitude: -71.118523},
{ latitude: 42.404766, longitude: -71.118569},
{ latitude: 42.404769, longitude: -71.118706},
{ latitude: 42.404773, longitude: -71.118744},
{ latitude: 42.404819, longitude: -71.119088},
{ latitude: 42.404937,  longitude: -71.119545},
{ latitude: 42.404949, longitude: -71.119576},
{ latitude: 42.405002, longitude: -71.119729},
{ latitude: 42.405075, longitude: -71.119912},
{ latitude: 42.405143, longitude: -71.120102},
{ latitude: 42.4052, longitude: -71.120247},
{ latitude: 42.405403, longitude: -71.120812},
{ latitude: 42.40541, longitude: -71.120804},
{ latitude: 42.405696, longitude: -71.120614},
{ latitude: 42.405696, longitude: -71.120614},
{ latitude: 42.406139, longitude: -71.120324},
{ latitude: 42.406352, longitude: -71.120881},
{ latitude: 42.406742, longitude: -71.121911},
{ latitude: 42.40718, longitude: -71.123063},
{ latitude: 42.407318, longitude: -71.123421},
{ latitude: 42.407318, longitude: -71.123421},
{ latitude: 42.40768, longitude: -71.124375},
{ latitude: 42.407978, longitude: -71.124177},
{ latitude: 42.408294, longitude: -71.123948},
{ latitude: 42.408355, longitude: -71.123917},
{ latitude: 42.408462, longitude: -71.123848},
{ latitude: 42.408767, longitude: -71.123635},
{ latitude: 42.408931, longitude: -71.123536},
{ latitude: 42.409191, longitude: -71.12336},
{ latitude: 42.409301, longitude: -71.123284},
{ latitude: 42.409339, longitude: -71.123261},
{ latitude: 42.409283, longitude: -71.123128},
{ latitude: 42.409759, longitude: -71.12257},
{ latitude: 42.409394, longitude: -71.121926},
{ latitude: 42.409109, longitude: -71.122012},
{ latitude: 42.408412, longitude: -71.120853},
{ latitude: 42.408424, longitude: -71.12085},
{ latitude: 42.408393, longitude: -71.120797},
{ latitude: 42.408329, longitude: -71.120842},
{ latitude: 42.408206, longitude: -71.120926},
{ latitude: 42.408092, longitude: -71.121003},
{ latitude: 42.407962, longitude: -71.121087},
{ latitude: 42.407703, longitude: -71.121262},
{ latitude: 42.407501, longitude: -71.121392},
{ latitude: 42.407356, longitude: -71.121483},
{ latitude: 42.407302, longitude: -71.121521},
{ latitude: 42.407302, longitude: -71.121521},
{ latitude: 42.407085, longitude: -71.121666},
{ latitude: 42.406963, longitude: -71.12175},
{ latitude: 42.406742, longitude: -71.121911},
{ latitude: 42.406352, longitude: -71.120881},
{ latitude: 42.406139,longitude: -71.120324},
{ latitude: 42.406105, longitude: -71.120232},
{ latitude: 42.405879, longitude: -71.119637},
{ latitude: 42.405857, longitude: -71.119576}
]

const bostonRoute = [
 
{latitude: 42.408676, longitude: -71.118088},
{latitude: 42.408729, longitude: -71.117997},
{latitude: 42.408424, longitude: -71.117722},
{latitude: 42.408054, longitude: -71.117432},
{latitude: 42.407646, longitude: -71.117119},
{latitude: 42.40723, longitude: -71.116807},
{latitude: 42.407199, longitude: -71.116784},
{latitude: 42.407142, longitude: -71.116761},
{latitude: 42.407028, longitude: -71.11673},
{latitude: 42.406974, longitude: -71.11673},
{latitude: 42.406921, longitude: -71.11673},
{latitude: 42.406856, longitude: -71.116753},
{latitude: 42.406799, longitude: -71.116784},
{latitude: 42.406684, longitude: -71.1167},
{latitude: 42.406661, longitude: -71.116677},
{latitude: 42.406585, longitude: -71.116623},
{latitude: 42.40607, longitude: -71.116234},
{latitude: 42.405914, longitude: -71.11612},
{latitude: 42.405197, longitude: -71.115578},
{latitude: 42.405151, longitude: -71.115548},
{latitude: 42.405147, longitude: -71.11554},
{latitude: 42.404811, longitude: -71.115288},
{latitude: 42.404373, longitude: -71.11496},
{latitude: 42.403869, longitude: -71.114594},
{latitude: 42.403947, longitude: -71.114384},
{latitude: 42.4038, longitude: -71.114261},
{latitude: 42.40367, longitude: -71.114427},
{latitude: 42.403659, longitude: -71.114434},
{latitude: 42.402793, longitude: -71.113793},
{latitude: 42.402946, longitude: -71.11345},
{latitude: 42.403297, longitude: -71.112542},
{latitude: 42.403327, longitude: -71.112572},
{latitude: 42.403953, longitude: -71.113091},
{latitude: 42.403911, longitude: -71.113289},
{latitude: 42.403949, longitude: -71.11332},
{latitude: 42.403911, longitude: -71.113289},
{latitude: 42.404457, longitude: -71.113694},
{latitude: 42.404979, longitude: -71.112397},
{latitude: 42.405292, longitude: -71.111596},
{latitude: 42.404727, longitude: -71.111176},
{latitude: 42.404613, longitude: -71.111466},
{latitude: 42.404361, longitude: -71.112069},
{latitude: 42.403682, longitude: -71.111573},
{latitude: 42.40361, longitude: -71.111748},
{latitude: 42.40361, longitude: -71.111748},
{latitude: 42.40343, longitude: -71.112206},
{latitude: 42.403297, longitude: -71.112542},
{latitude: 42.402946, longitude: -71.11345},
{latitude: 42.402793, longitude: -71.113793},
{latitude: 42.403869, longitude: -71.114586},
{latitude: 42.404373, longitude: -71.11496},
{latitude: 42.404579, longitude: -71.115113},
{latitude: 42.404579, longitude: -71.115113},
{latitude: 42.404811, longitude: -71.115288},
{latitude: 42.405147, longitude: -71.11554},
{latitude: 42.405151, longitude: -71.115548},
{latitude: 42.405197, longitude: -71.115578},
{latitude: 42.405181, longitude: -71.115647},
{latitude: 42.405124, longitude: -71.11586},
{latitude: 42.405075, longitude: -71.116036},
{latitude: 42.405021, longitude: -71.116448},
{latitude: 42.405048, longitude: -71.116593},
{latitude: 42.405059, longitude: -71.116646},
{latitude: 42.405078, longitude: -71.116768},
{latitude: 42.405151, longitude: -71.117028},
{latitude: 42.405246, longitude: -71.117196},
{latitude: 42.405296, longitude: -71.117287},
{latitude: 42.405433, longitude: -71.117409},
{latitude: 42.40533, longitude: -71.117394},
{latitude: 42.405319, longitude: -71.117394},
{latitude: 42.405319, longitude: -71.117394},
{latitude: 42.404853, longitude: -71.117325},
{latitude: 42.404842, longitude: -71.117417},
{latitude: 42.404773, longitude: -71.117943},
{latitude: 42.404769, longitude: -71.118004},
{latitude: 42.404754, longitude: -71.118294},
{latitude: 42.404762, longitude: -71.118523},
{latitude: 42.404766, longitude: -71.118569},
{latitude: 42.404769, longitude: -71.118706},
{latitude: 42.404773, longitude: -71.118744},
{latitude: 42.404819, longitude: -71.119088},
{latitude: 42.404937, longitude: -71.119545},
{latitude: 42.404949, longitude: -71.119576},
{latitude: 42.405002, longitude: -71.119729},
{latitude: 42.405075, longitude: -71.119912},
{latitude: 42.405143, longitude: -71.120102},
{latitude: 42.4052, longitude: -71.120247},
{latitude: 42.405269, longitude: -71.12043},
{latitude: 42.405269, longitude: -71.12043},
{latitude: 42.405403, longitude: -71.120812},
{latitude: 42.40541, longitude: -71.120804},
{latitude: 42.406139, longitude: -71.120324},
{latitude: 42.406352, longitude: -71.120881},
{latitude: 42.406742, longitude: -71.121911},
{latitude: 42.40718, longitude: -71.123063},
{latitude: 42.40768, longitude: -71.124375},
{latitude: 42.40763, longitude: -71.124398},
{latitude: 42.40763, longitude: -71.124398},
{latitude: 42.40768, longitude: -71.124375},
{latitude: 42.407978, longitude: -71.124177},
{latitude: 42.408294, longitude: -71.123948},
{latitude: 42.408355, longitude: -71.123917},
{latitude: 42.408462, longitude: -71.123848},
{latitude: 42.408767, longitude: -71.123635},
{latitude: 42.408931, longitude: -71.123536},
{latitude: 42.409191, longitude: -71.12336},
{latitude: 42.409301, longitude: -71.123284},
{latitude: 42.409339, longitude: -71.123261},
{latitude: 42.409427, longitude: -71.1232},
{latitude: 42.409606, longitude: -71.123086},
{latitude: 42.409999, longitude: -71.122841},
{latitude: 42.410457, longitude: -71.122521},
{latitude: 42.410709, longitude: -71.122345},
{latitude: 42.410717, longitude: -71.122338},
{latitude: 42.411151, longitude: -71.122033},
{latitude: 42.41146, longitude: -71.121834},
{latitude: 42.41146, longitude: -71.121834},
{latitude: 42.411548, longitude: -71.121781},
{latitude: 42.411899, longitude: -71.12233},
{latitude: 42.412246, longitude: -71.122857},
{latitude: 42.412635, longitude: -71.123444},
{latitude: 42.41286, longitude: -71.123795},
{latitude: 42.413303, longitude: -71.124474},
{latitude: 42.413757, longitude: -71.12513},
{latitude: 42.414188, longitude: -71.125809},
{latitude: 42.414695, longitude: -71.126572},
{latitude: 42.414718, longitude: -71.12661},
{latitude: 42.414695, longitude: -71.126572},
{latitude: 42.414764, longitude: -71.126679},
{latitude: 42.415111, longitude: -71.126259},
{latitude: 42.415519, longitude: -71.126877},
{latitude: 42.415519, longitude: -71.126877},
{latitude: 42.415889, longitude: -71.127434},
{latitude: 42.415546, longitude: -71.127846},
{latitude: 42.41558, longitude: -71.127892},
{latitude: 42.415657, longitude: -71.128006},
{latitude: 42.415683, longitude: -71.128045},
{latitude: 42.41611, longitude: -71.128685},
{latitude: 42.4165, longitude: -71.129273},
{latitude: 42.4165, longitude: -71.129273},
{latitude: 42.416534, longitude: -71.129334},
{latitude: 42.416587, longitude: -71.129418},
{latitude: 42.416641, longitude: -71.129349},
{latitude: 42.416759, longitude: -71.129197},
{latitude: 42.416843, longitude: -71.129082},
{latitude: 42.416931, longitude: -71.128968},
{latitude: 42.417011, longitude: -71.128861},
{latitude: 42.417087, longitude: -71.128747},
{latitude: 42.417156, longitude: -71.12864},
{latitude: 42.417221, longitude: -71.128541},
{latitude: 42.417301, longitude: -71.128403},
{latitude: 42.417388, longitude: -71.128251},
{latitude: 42.417457, longitude: -71.128136},
{latitude: 42.417522, longitude: -71.128014},
{latitude: 42.417587, longitude: -71.127869},
{latitude: 42.417636, longitude: -71.127747},
{latitude: 42.417621, longitude: -71.127648},
{latitude: 42.417594, longitude: -71.127518},
{latitude: 42.417579, longitude: -71.127457},
{latitude: 42.417522, longitude: -71.127373},
{latitude: 42.417438, longitude: -71.127312},
{latitude: 42.417335, longitude: -71.127259},
{latitude: 42.417312, longitude: -71.127205},
{latitude: 42.417327, longitude: -71.127099},
{latitude: 42.417343, longitude: -71.126877},
{latitude: 42.41735, longitude: -71.126664},
{latitude: 42.41735, longitude: -71.126664},
{latitude: 42.417366, longitude: -71.126412},
{latitude: 42.417373, longitude: -71.12632},
{latitude: 42.417407, longitude: -71.126236},
{latitude: 42.417442, longitude: -71.126244},
{latitude: 42.417587, longitude: -71.126267},
{latitude: 42.417686, longitude: -71.126275},
{latitude: 42.417648, longitude: -71.126122},
{latitude: 42.417629, longitude: -71.125893},
{latitude: 42.417629, longitude: -71.125664},
{latitude: 42.41761, longitude: -71.125489},
{latitude: 42.41761, longitude: -71.125489},
{latitude: 42.417564, longitude: -71.12529},
{latitude: 42.417373, longitude: -71.124711},
{latitude: 42.41735, longitude: -71.124627},
{latitude: 42.417179, longitude: -71.124016},
{latitude: 42.417057, longitude: -71.12394},
{latitude: 42.417057, longitude: -71.12394},
{latitude: 42.416446, longitude: -71.124344},
{latitude: 42.415809, longitude: -71.124779},
{latitude: 42.415378, longitude: -71.125031},
{latitude: 42.415336, longitude: -71.125062},
{latitude: 42.415275, longitude: -71.125107},
{latitude: 42.415245, longitude: -71.125123},
{latitude: 42.415187, longitude: -71.125161},
{latitude: 42.415088, longitude: -71.125222},
{latitude: 42.415016, longitude: -71.125275},
{latitude: 42.414661, longitude: -71.125489},
{latitude: 42.414188, longitude: -71.125809},
{latitude: 42.414188, longitude: -71.125809},
{latitude: 42.413757, longitude: -71.12513},
{latitude: 42.413303, longitude: -71.124474},
{latitude: 42.41286, longitude: -71.123795},
{latitude: 42.412635, longitude: -71.123444},
{latitude: 42.412246, longitude: -71.122857},
{latitude: 42.411899, longitude: -71.12233},
{latitude: 42.411548, longitude: -71.121781},
{latitude: 42.411293, longitude: -71.121399},
{latitude: 42.410934, longitude: -71.12082},
{latitude: 42.410808, longitude: -71.120614},
{latitude: 42.410808, longitude: -71.120614},
{latitude: 42.410579, longitude: -71.120232},
{latitude: 42.410327, longitude: -71.119828},
{latitude: 42.410259, longitude: -71.119729},
{latitude: 42.4099, longitude: -71.119278},
{latitude: 42.409648, longitude: -71.118973},
{latitude: 42.409374, longitude: -71.118638},
{latitude: 42.409122, longitude: -71.118371},
{latitude: 42.408893, longitude: -71.118165},
{latitude: 42.408729, longitude: -71.117997}

]

const smfaRoute = [
{latitude: 42.404803, longitude: -71.118947},
{latitude: 42.4048, longitude: -71.11895},
{latitude: 42.404773, longitude: -71.118744},
{latitude: 42.404769, longitude: -71.118706},
{latitude: 42.404766, longitude: -71.118569},
{latitude: 42.404762, longitude: -71.118523},
{latitude: 42.404754, longitude: -71.118294},
{latitude: 42.404769, longitude: -71.118004},
{latitude: 42.404773, longitude: -71.117943},
{latitude: 42.404842, longitude: -71.117417},
{latitude: 42.404853, longitude: -71.117325},
{latitude: 42.40485, longitude: -71.117318},
{latitude: 42.40533, longitude: -71.117394},
{latitude: 42.405429, longitude: -71.117409},
{latitude: 42.405433, longitude: -71.117409},
{latitude: 42.405296, longitude: -71.117287},
{latitude: 42.405246, longitude: -71.117196},
{latitude: 42.405151, longitude: -71.117028},
{latitude: 42.405078, longitude: -71.116768},
{latitude: 42.405059, longitude: -71.116646},
{latitude: 42.405048, longitude: -71.116593},
{latitude: 42.405021, longitude: -71.116448},
{latitude: 42.405075, longitude: -71.116036},
{latitude: 42.405124, longitude: -71.11586},
{latitude: 42.405181, longitude: -71.115647},
{latitude: 42.405197, longitude: -71.115578},
{latitude: 42.405197, longitude: -71.115578},
{latitude: 42.405151, longitude: -71.115548},
{latitude: 42.405147, longitude: -71.11554},
{latitude: 42.404811, longitude: -71.115288},
{latitude: 42.404373, longitude: -71.11496},
{latitude: 42.403869, longitude: -71.114586},
{latitude: 42.402793, longitude: -71.113793},
{latitude: 42.399978, longitude: -71.11168},
{latitude: 42.399658, longitude: -71.111435},
{latitude: 42.399658, longitude: -71.111428},
{latitude: 42.399482, longitude: -71.110909},
{latitude: 42.399436, longitude: -71.110756},
{latitude: 42.399387, longitude: -71.110604},
{latitude: 42.399356, longitude: -71.11052},
{latitude: 42.399326, longitude: -71.110444},
{latitude: 42.399299, longitude: -71.11036},
{latitude: 42.399223, longitude: -71.110131},
{latitude: 42.399204, longitude: -71.110077},
{latitude: 42.39912, longitude: -71.109849},
{latitude: 42.39912, longitude: -71.109849},
{latitude: 42.398941, longitude: -71.109345},
{latitude: 42.3987, longitude: -71.10862},
{latitude: 42.398498, longitude: -71.107972},
{latitude: 42.398418, longitude: -71.10775},
{latitude: 42.398288, longitude: -71.107331},
{latitude: 42.397888, longitude: -71.106057},
{latitude: 42.397773, longitude: -71.105706},
{latitude: 42.397567, longitude: -71.10505},
{latitude: 42.397361, longitude: -71.104394},
{latitude: 42.397361, longitude: -71.104394},
{latitude: 42.397151, longitude: -71.104241},
{latitude: 42.396896, longitude: -71.10405},
{latitude: 42.396408, longitude: -71.103661},
{latitude: 42.395732, longitude: -71.103127},
{latitude: 42.395668, longitude: -71.103081},
{latitude: 42.395191, longitude: -71.102707},
{latitude: 42.394691, longitude: -71.10228},
{latitude: 42.3941, longitude: -71.101838},
{latitude: 42.393585, longitude: -71.101441},
{latitude: 42.393283, longitude: -71.101189},
{latitude: 42.392478, longitude: -71.100571},
{latitude: 42.391899, longitude: -71.099999},
{latitude: 42.391899, longitude: -71.099999},
{latitude: 42.391319, longitude: -71.099404},
{latitude: 42.391139, longitude: -71.099213},
{latitude: 42.390888, longitude: -71.098954},
{latitude: 42.390422, longitude: -71.098481},
{latitude: 42.389884, longitude: -71.097954},
{latitude: 42.389141, longitude: -71.097161},
{latitude: 42.38866, longitude: -71.096657},
{latitude: 42.388309, longitude: -71.096283},
{latitude: 42.388309, longitude: -71.096283},
{latitude: 42.388141, longitude: -71.095734},
{latitude: 42.388137, longitude: -71.095688},
{latitude: 42.387844, longitude: -71.094735},
{latitude: 42.387802, longitude: -71.094597},
{latitude: 42.387619, longitude: -71.093995},
{latitude: 42.38755, longitude: -71.093766},
{latitude: 42.387378, longitude: -71.093194},
{latitude: 42.387378, longitude: -71.093194},
{latitude: 42.387157, longitude: -71.092492},
{latitude: 42.387058, longitude: -71.092186},
{latitude: 42.387004, longitude: -71.091996},
{latitude: 42.386817, longitude: -71.091408},
{latitude: 42.386638, longitude: -71.090828},
{latitude: 42.386573, longitude: -71.09063},
{latitude: 42.386573, longitude: -71.09063},
{latitude: 42.386089, longitude: -71.090836},
{latitude: 42.385848, longitude: -71.090928},
{latitude: 42.385551, longitude: -71.091034},
{latitude: 42.385299, longitude: -71.091126},
{latitude: 42.384948, longitude: -71.091233},
{latitude: 42.384571, longitude: -71.091324},
{latitude: 42.384109, longitude: -71.091439},
{latitude: 42.383789, longitude: -71.091523},
{latitude: 42.383686, longitude: -71.091546},
{latitude: 42.383567, longitude: -71.091553},
{latitude: 42.383499, longitude: -71.091553},
{latitude: 42.38343, longitude: -71.091538},
{latitude: 42.383399, longitude: -71.09153},
{latitude: 42.383369, longitude: -71.091523},
{latitude: 42.383312, longitude: -71.0915},
{latitude: 42.382907, longitude: -71.091225},
{latitude: 42.382587, longitude: -71.090966},
{latitude: 42.382472, longitude: -71.090882},
{latitude: 42.38216, longitude: -71.090615},
{latitude: 42.381946, longitude: -71.090447},
{latitude: 42.381839, longitude: -71.090378},
{latitude: 42.381839, longitude: -71.090378},
{latitude: 42.381774, longitude: -71.090333},
{latitude: 42.38161, longitude: -71.090241},
{latitude: 42.381431, longitude: -71.090149},
{latitude: 42.381225, longitude: -71.090081},
{latitude: 42.381, longitude: -71.090012},
{latitude: 42.380836, longitude: -71.089966},
{latitude: 42.380714, longitude: -71.089936},
{latitude: 42.380489, longitude: -71.089875},
{latitude: 42.380378, longitude: -71.089844},
{latitude: 42.3796, longitude: -71.089577},
{latitude: 42.377773, longitude: -71.089135},
{latitude: 42.377643, longitude: -71.089089},
{latitude: 42.37751, longitude: -71.089013},
{latitude: 42.377395, longitude: -71.088929},
{latitude: 42.377296, longitude: -71.08883},
{latitude: 42.377197, longitude: -71.088707},
{latitude: 42.377105, longitude: -71.088578},
{latitude: 42.377021, longitude: -71.08841},
{latitude: 42.377021, longitude: -71.08841},
{latitude: 42.37701, longitude: -71.088395},
{latitude: 42.376487, longitude: -71.087288},
{latitude: 42.376331, longitude: -71.08696},
{latitude: 42.376235, longitude: -71.086808},
{latitude: 42.376125, longitude: -71.086663},
{latitude: 42.375904, longitude: -71.086419},
{latitude: 42.375774, longitude: -71.086274},
{latitude: 42.375709, longitude: -71.086182},
{latitude: 42.375473, longitude: -71.085763},
{latitude: 42.37487, longitude: -71.084626},
{latitude: 42.374774, longitude: -71.08442},
{latitude: 42.374565, longitude: -71.083954},
{latitude: 42.374366, longitude: -71.083512},
{latitude: 42.374149, longitude: -71.083069},
{latitude: 42.373924, longitude: -71.082612},
{latitude: 42.37379, longitude: -71.082329},
{latitude: 42.373676, longitude: -71.082055},
{latitude: 42.373439, longitude: -71.081612},
{latitude: 42.373149, longitude: -71.08104},
{latitude: 42.373149, longitude: -71.08104},
{latitude: 42.372535, longitude: -71.079819},
{latitude: 42.372356, longitude: -71.079461},
{latitude: 42.372356, longitude: -71.079461},
{latitude: 42.372283, longitude: -71.079522},
{latitude: 42.372268, longitude: -71.079529},
{latitude: 42.372108, longitude: -71.07959},
{latitude: 42.371711, longitude: -71.079682},
{latitude: 42.371013, longitude: -71.07985},
{latitude: 42.370403, longitude: -71.079995},
{latitude: 42.370315, longitude: -71.080002},
{latitude: 42.370235, longitude: -71.08001},
{latitude: 42.369632, longitude: -71.080147},
{latitude: 42.368953, longitude: -71.0803},
{latitude: 42.368381, longitude: -71.080514},
{latitude: 42.368331, longitude: -71.080536},
{latitude: 42.368293, longitude: -71.080559},
{latitude: 42.368022, longitude: -71.080758},
{latitude: 42.367736, longitude: -71.081025},
{latitude: 42.367675, longitude: -71.081101},
{latitude: 42.367584, longitude: -71.081208},
{latitude: 42.367515, longitude: -71.081276},
{latitude: 42.367412, longitude: -71.081376},
{latitude: 42.367321, longitude: -71.081452},
{latitude: 42.367225, longitude: -71.081513},
{latitude: 42.367187, longitude: -71.081536},
{latitude: 42.367031, longitude: -71.081635},
{latitude: 42.367, longitude: -71.08165},
{latitude: 42.366641, longitude: -71.081856},
{latitude: 42.366382, longitude: -71.082001},
{latitude: 42.365734, longitude: -71.082375},
{latitude: 42.36573, longitude: -71.082367},
{latitude: 42.365997, longitude: -71.084427},
{latitude: 42.366077, longitude: -71.085045},
{latitude: 42.366195, longitude: -71.085961},
{latitude: 42.366207, longitude: -71.086052},
{latitude: 42.366226, longitude: -71.086182},
{latitude: 42.366275, longitude: -71.086556},
{latitude: 42.36642, longitude: -71.087716},
{latitude: 42.366432, longitude: -71.087822},
{latitude: 42.366439, longitude: -71.087929},
{latitude: 42.366439, longitude: -71.088044},
{latitude: 42.366432, longitude: -71.088151},
{latitude: 42.366428, longitude: -71.088173},
{latitude: 42.366397, longitude: -71.088364},
{latitude: 42.366363, longitude: -71.088486},
{latitude: 42.366325, longitude: -71.088601},
{latitude: 42.366275, longitude: -71.088715},
{latitude: 42.366218, longitude: -71.088822},
{latitude: 42.366153, longitude: -71.088913},
{latitude: 42.366062, longitude: -71.08902},
{latitude: 42.365943, longitude: -71.089119},
{latitude: 42.365848, longitude: -71.089188},
{latitude: 42.365718, longitude: -71.089242},
{latitude: 42.365573, longitude: -71.089272},
{latitude: 42.36499, longitude: -71.089425},
{latitude: 42.364845, longitude: -71.089463},
{latitude: 42.364803, longitude: -71.089478},
{latitude: 42.364284, longitude: -71.089615},
{latitude: 42.363918, longitude: -71.089699},
{latitude: 42.362857, longitude: -71.089974},
{latitude: 42.362812, longitude: -71.089974},
{latitude: 42.362777, longitude: -71.089974},
{latitude: 42.36272, longitude: -71.089943},
{latitude: 42.36272, longitude: -71.089943},
{latitude: 42.362644, longitude: -71.089974},
{latitude: 42.362609, longitude: -71.089989},
{latitude: 42.362579, longitude: -71.09002},
{latitude: 42.362548, longitude: -71.09005},
{latitude: 42.362522, longitude: -71.090088},
{latitude: 42.362499, longitude: -71.090134},
{latitude: 42.362255, longitude: -71.09063},
{latitude: 42.362216, longitude: -71.090706},
{latitude: 42.362178, longitude: -71.090783},
{latitude: 42.361797, longitude: -71.091492},
{latitude: 42.361267, longitude: -71.092553},
{latitude: 42.361164, longitude: -71.092766},
{latitude: 42.361049, longitude: -71.092995},
{latitude: 42.360645, longitude: -71.09385},
{latitude: 42.360149, longitude: -71.094887},
{latitude: 42.360149, longitude: -71.094887},
{latitude: 42.360057, longitude: -71.094742},
{latitude: 42.359954, longitude: -71.094574},
{latitude: 42.359855, longitude: -71.094437},
{latitude: 42.359756, longitude: -71.0943},
{latitude: 42.359653, longitude: -71.09417},
{latitude: 42.359554, longitude: -71.094048},
{latitude: 42.3595, longitude: -71.093987},
{latitude: 42.35939, longitude: -71.093865},
{latitude: 42.359272, longitude: -71.093758},
{latitude: 42.359149, longitude: -71.093651},
{latitude: 42.359031, longitude: -71.09356},
{latitude: 42.358898, longitude: -71.093468},
{latitude: 42.358779, longitude: -71.093392},
{latitude: 42.358642, longitude: -71.093308},
{latitude: 42.358493, longitude: -71.093232},
{latitude: 42.358192, longitude: -71.093087},
{latitude: 42.357475, longitude: -71.092736},
{latitude: 42.357379, longitude: -71.092682},
{latitude: 42.357318, longitude: -71.092659},
{latitude: 42.357151, longitude: -71.092576},
{latitude: 42.357109, longitude: -71.092553},
{latitude: 42.357032, longitude: -71.092515},
{latitude: 42.356986, longitude: -71.092492},
{latitude: 42.355121, longitude: -71.091584},
{latitude: 42.355129, longitude: -71.091584},
{latitude: 42.351795, longitude: -71.089951},
{latitude: 42.351657, longitude: -71.089882},
{latitude: 42.351398, longitude: -71.089753},
{latitude: 42.351367, longitude: -71.089737},
{latitude: 42.350849, longitude: -71.089486},
{latitude: 42.350456, longitude: -71.089295},
{latitude: 42.350063, longitude: -71.089097},
{latitude: 42.349704, longitude: -71.088921},
{latitude: 42.349258, longitude: -71.088707},
{latitude: 42.349205, longitude: -71.088677},
{latitude: 42.348987, longitude: -71.08857},
{latitude: 42.348907, longitude: -71.088532},
{latitude: 42.348468, longitude: -71.088318},
{latitude: 42.348094, longitude: -71.088135},
{latitude: 42.347789, longitude: -71.087983},
{latitude: 42.347484, longitude: -71.08783},
{latitude: 42.347297, longitude: -71.087739},
{latitude: 42.346912, longitude: -71.087555},
{latitude: 42.346656, longitude: -71.087426},
{latitude: 42.346481, longitude: -71.087342},
{latitude: 42.34592, longitude: -71.087067},
{latitude: 42.345455, longitude: -71.086838},
{latitude: 42.344917, longitude: -71.086571},
{latitude: 42.343482, longitude: -71.085869},
{latitude: 42.343433, longitude: -71.085839},
{latitude: 42.343383, longitude: -71.085801},
{latitude: 42.34333, longitude: -71.085747},
{latitude: 42.343334, longitude: -71.085747},
{latitude: 42.342876, longitude: -71.085068},
{latitude: 42.342842, longitude: -71.085022},
{latitude: 42.342712, longitude: -71.084832},
{latitude: 42.342201, longitude: -71.084069},
{latitude: 42.342201, longitude: -71.084069},
{latitude: 42.341899, longitude: -71.084427},
{latitude: 42.341068, longitude: -71.085457},
{latitude: 42.3409, longitude: -71.085663},
{latitude: 42.3409, longitude: -71.085663},
{latitude: 42.34143, longitude: -71.086457},
{latitude: 42.341518, longitude: -71.086571},
{latitude: 42.341518, longitude: -71.086571},
{latitude: 42.341358, longitude: -71.086785},
{latitude: 42.341232, longitude: -71.086983},
{latitude: 42.341156, longitude: -71.087143},
{latitude: 42.341068, longitude: -71.087342},
{latitude: 42.341037, longitude: -71.08741},
{latitude: 42.340698, longitude: -71.088257},
{latitude: 42.340446, longitude: -71.088929},
{latitude: 42.340404, longitude: -71.089043},
{latitude: 42.340282, longitude: -71.089394},
{latitude: 42.340129, longitude: -71.089798},
{latitude: 42.340015, longitude: -71.090096},
{latitude: 42.339775, longitude: -71.090645},
{latitude: 42.339599, longitude: -71.091065},
{latitude: 42.339363, longitude: -71.091683},
{latitude: 42.339069, longitude: -71.092392},
{latitude: 42.339035, longitude: -71.092476},
{latitude: 42.338722, longitude: -71.09327},
{latitude: 42.338699, longitude: -71.093323},
{latitude: 42.338504, longitude: -71.093804},
{latitude: 42.338497, longitude: -71.093827},
{latitude: 42.338233, longitude: -71.094468},
{latitude: 42.338127, longitude: -71.094719},
{latitude: 42.338088, longitude: -71.094819},
{latitude: 42.337749, longitude: -71.095734},
{latitude: 42.337749, longitude: -71.095734},
{latitude: 42.337829, longitude: -71.095933},
{latitude: 42.337863, longitude: -71.096001},
{latitude: 42.337898, longitude: -71.096085},
{latitude: 42.338047, longitude: -71.096428},
{latitude: 42.338249, longitude: -71.096879},
{latitude: 42.338459, longitude: -71.097321},
{latitude: 42.338459, longitude: -71.097321},
{latitude: 42.3386, longitude: -71.097214},
{latitude: 42.3386, longitude: -71.097214},
{latitude: 42.339061, longitude: -71.096848},
{latitude: 42.339271, longitude: -71.096688},
{latitude: 42.339397, longitude: -71.096596},
{latitude: 42.339515, longitude: -71.096497},
{latitude: 42.339626, longitude: -71.096398},
{latitude: 42.33974, longitude: -71.096268},
{latitude: 42.339855, longitude: -71.096116},
{latitude: 42.339923, longitude: -71.095994},
{latitude: 42.339946, longitude: -71.095955},
{latitude: 42.340015, longitude: -71.09581},
{latitude: 42.340103, longitude: -71.095627},
{latitude: 42.34019, longitude: -71.095414},
{latitude: 42.340293, longitude: -71.095147},
{latitude: 42.340511, longitude: -71.094605},
{latitude: 42.340587, longitude: -71.094414},
{latitude: 42.340675, longitude: -71.09414},
{latitude: 42.340728, longitude: -71.093934},
{latitude: 42.340778, longitude: -71.09372},
{latitude: 42.340755, longitude: -71.093621},
{latitude: 42.340717, longitude: -71.093537},
{latitude: 42.340671, longitude: -71.093461},
{latitude: 42.340648, longitude: -71.093438},
{latitude: 42.340648, longitude: -71.093438},
{latitude: 42.340354, longitude: -71.093155},
{latitude: 42.340023, longitude: -71.092919},
{latitude: 42.339534, longitude: -71.092553},
{latitude: 42.339298, longitude: -71.0924},
{latitude: 42.339229, longitude: -71.092362},
{latitude: 42.339145, longitude: -71.092362},
{latitude: 42.339069, longitude: -71.092392},
{latitude: 42.33884, longitude: -71.092484},
{latitude: 42.33884, longitude: -71.092476},
{latitude: 42.338954, longitude: -71.092194},
{latitude: 42.339107, longitude: -71.091805},
{latitude: 42.339298, longitude: -71.091317},
{latitude: 42.339588, longitude: -71.090569},
{latitude: 42.339973, longitude: -71.089615},
{latitude: 42.340087, longitude: -71.089341},
{latitude: 42.340293, longitude: -71.088852},
{latitude: 42.340301, longitude: -71.08883},
{latitude: 42.340484, longitude: -71.088387},
{latitude: 42.340553, longitude: -71.088219},
{latitude: 42.340843, longitude: -71.087494},
{latitude: 42.340942, longitude: -71.08725},
{latitude: 42.340976, longitude: -71.087159},
{latitude: 42.341079, longitude: -71.08696},
{latitude: 42.341175, longitude: -71.0868},
{latitude: 42.341289, longitude: -71.08664},
{latitude: 42.341289, longitude: -71.08664},
{latitude: 42.34143, longitude: -71.086457},
{latitude: 42.341629, longitude: -71.086213},
{latitude: 42.341857, longitude: -71.085984},
{latitude: 42.342594, longitude: -71.085099},
{latitude: 42.342926, longitude: -71.084702},
{latitude: 42.343597, longitude: -71.08387},
{latitude: 42.343856, longitude: -71.083512},
{latitude: 42.344287, longitude: -71.082985},
{latitude: 42.34436, longitude: -71.082902}, 
{latitude: 42.345108, longitude: -71.082001},
{latitude: 42.34534, longitude: -71.081711},
{latitude: 42.34534, longitude: -71.081711},
{latitude: 42.34542, longitude: -71.081818},
{latitude: 42.345516, longitude: -71.08194},
{latitude: 42.345653, longitude: -71.082146},
{latitude: 42.345714, longitude: -71.082245},
{latitude: 42.345748, longitude: -71.082322},
{latitude: 42.345775, longitude: -71.082436},
{latitude: 42.345798, longitude: -71.082566},
{latitude: 42.345821, longitude: -71.082802},
{latitude: 42.345874, longitude: -71.083085},
{latitude: 42.345897, longitude: -71.083313},
{latitude: 42.345912, longitude: -71.083443},
{latitude: 42.346046, longitude: -71.084343},
{latitude: 42.346099, longitude: -71.084603},
{latitude: 42.346401, longitude: -71.086686},
{latitude: 42.346481, longitude: -71.087342},
{latitude: 42.346481, longitude: -71.087342},
{latitude: 42.346656, longitude: -71.087426},
{latitude: 42.346912, longitude: -71.087555},
{latitude: 42.347297, longitude: -71.087739},
{latitude: 42.347484, longitude: -71.08783},
{latitude: 42.347789, longitude: -71.087983},
{latitude: 42.348094, longitude: -71.088135},
{latitude: 42.348468, longitude: -71.088318},
{latitude: 42.348907, longitude: -71.088532},
{latitude: 42.348987, longitude: -71.08857},
{latitude: 42.349205, longitude: -71.088677},
{latitude: 42.349258, longitude: -71.088707},
{latitude: 42.349704, longitude: -71.088921},
{latitude: 42.350063, longitude: -71.089097},
{latitude: 42.350456, longitude: -71.089295},
{latitude: 42.350849, longitude: -71.089486},
{latitude: 42.351367, longitude: -71.089737},
{latitude: 42.351398, longitude: -71.089753},
{latitude: 42.351657, longitude: -71.089882},
{latitude: 42.351795, longitude: -71.089951},
{latitude: 42.356986, longitude: -71.092492},
{latitude: 42.357032, longitude: -71.092515},
{latitude: 42.357109, longitude: -71.092553},
{latitude: 42.357151, longitude: -71.092576},
{latitude: 42.357318, longitude: -71.092659},
{latitude: 42.357379, longitude: -71.092682},
{latitude: 42.357475, longitude: -71.092736},
{latitude: 42.358192, longitude: -71.093087},
{latitude: 42.358493, longitude: -71.093232},
{latitude: 42.358642, longitude: -71.093308},
{latitude: 42.358779, longitude: -71.093392},
{latitude: 42.358898, longitude: -71.093468},
{latitude: 42.359031, longitude: -71.09356},
{latitude: 42.359149, longitude: -71.093651},
{latitude: 42.359272, longitude: -71.093758},
{latitude: 42.35939, longitude: -71.093865},
{latitude: 42.3595, longitude: -71.093987},
{latitude: 42.359554, longitude: -71.094048},
{latitude: 42.359653, longitude: -71.09417},
{latitude: 42.359756, longitude: -71.0943},
{latitude: 42.359855, longitude: -71.094437},
{latitude: 42.359954, longitude: -71.094574},
{latitude: 42.360057, longitude: -71.094742},
{latitude: 42.360149, longitude: -71.094887},
{latitude: 42.360645, longitude: -71.09385},
{latitude: 42.361049, longitude: -71.092995},
{latitude: 42.361164, longitude: -71.092766},
{latitude: 42.361267, longitude: -71.092553},
{latitude: 42.361797, longitude: -71.091492},
{latitude: 42.362178, longitude: -71.090783},
{latitude: 42.362216, longitude: -71.090706},
{latitude: 42.362255, longitude: -71.09063},
{latitude: 42.362499, longitude: -71.090134},
{latitude: 42.362522, longitude: -71.090088},
{latitude: 42.362548, longitude: -71.09005},
{latitude: 42.362579, longitude: -71.09002},
{latitude: 42.362609, longitude: -71.089989},
{latitude: 42.362644, longitude: -71.089974},
{latitude: 42.36272, longitude: -71.089943},
{latitude: 42.362766, longitude: -71.089898},
{latitude: 42.362804, longitude: -71.089867},
{latitude: 42.362842, longitude: -71.089852},
{latitude: 42.364208, longitude: -71.089493},
{latitude: 42.364738, longitude: -71.089356},
{latitude: 42.36481, longitude: -71.089333},
{latitude: 42.364948, longitude: -71.089303},
{latitude: 42.365573, longitude: -71.089142},
{latitude: 42.365665, longitude: -71.089112},
{latitude: 42.36573, longitude: -71.089081},
{latitude: 42.36573, longitude: -71.089081},
{latitude: 42.365768, longitude: -71.089066},
{latitude: 42.365875, longitude: -71.089005},
{latitude: 42.365959, longitude: -71.088944},
{latitude: 42.366043, longitude: -71.088852},
{latitude: 42.366115, longitude: -71.088769},
{latitude: 42.366172, longitude: -71.088662},
{latitude: 42.366222, longitude: -71.088563},
{latitude: 42.36626, longitude: -71.088456},
{latitude: 42.366291, longitude: -71.088349},
{latitude: 42.366313, longitude: -71.088242},
{latitude: 42.366325, longitude: -71.08812},
{latitude: 42.366336, longitude: -71.088006},
{latitude: 42.366333, longitude: -71.087899},
{latitude: 42.366321, longitude: -71.087792},
{latitude: 42.366249, longitude: -71.087258},
{latitude: 42.36618, longitude: -71.086663},
{latitude: 42.366096, longitude: -71.08603},
{latitude: 42.365634, longitude: -71.082451},
{latitude: 42.365634, longitude: -71.082451},
{latitude: 42.365734, longitude: -71.082375},
{latitude: 42.366382, longitude: -71.082001},
{latitude: 42.366641, longitude: -71.081856},
{latitude: 42.367, longitude: -71.08165},
{latitude: 42.367031, longitude: -71.081635},
{latitude: 42.367187, longitude: -71.081536},
{latitude: 42.367225, longitude: -71.081513},
{latitude: 42.367321, longitude: -71.081452},
{latitude: 42.367412, longitude: -71.081376},
{latitude: 42.367515, longitude: -71.081276},
{latitude: 42.367584, longitude: -71.081208},
{latitude: 42.367675, longitude: -71.081101},
{latitude: 42.367736, longitude: -71.081025},
{latitude: 42.368022, longitude: -71.080758},
{latitude: 42.368293, longitude: -71.080559},
{latitude: 42.368331, longitude: -71.080536},
{latitude: 42.368381, longitude: -71.080514},
{latitude: 42.368953, longitude: -71.0803},
{latitude: 42.369632, longitude: -71.080147},
{latitude: 42.370235, longitude: -71.08001},
{latitude: 42.370315, longitude: -71.080002},
{latitude: 42.370403, longitude: -71.079995},
{latitude: 42.371013, longitude: -71.07985},
{latitude: 42.371711, longitude: -71.079682},
{latitude: 42.372108, longitude: -71.07959},
{latitude: 42.372268, longitude: -71.079529},
{latitude: 42.372283, longitude: -71.079522},
{latitude: 42.372356, longitude: -71.079461},
{latitude: 42.372451, longitude: -71.079369},
{latitude: 42.372451, longitude: -71.079369},
{latitude: 42.373779, longitude: -71.081994},
{latitude: 42.374656, longitude: -71.083855},
{latitude: 42.374778, longitude: -71.084122},
{latitude: 42.374912, longitude: -71.084397},
{latitude: 42.374961, longitude: -71.084488},
{latitude: 42.375698, longitude: -71.085915},
{latitude: 42.375774, longitude: -71.086045},
{latitude: 42.375846, longitude: -71.086159},
{latitude: 42.375949, longitude: -71.086266},
{latitude: 42.376106, longitude: -71.086426},
{latitude: 42.376247, longitude: -71.086594},
{latitude: 42.376377, longitude: -71.086785},
{latitude: 42.376674, longitude: -71.087395},
{latitude: 42.376811, longitude: -71.087685},
{latitude: 42.376941, longitude: -71.08796},
{latitude: 42.377063, longitude: -71.088219},
{latitude: 42.37717, longitude: -71.088418},
{latitude: 42.377262, longitude: -71.08857},
{latitude: 42.377349, longitude: -71.088685},
{latitude: 42.377464, longitude: -71.08883},
{latitude: 42.377563, longitude: -71.088898},
{latitude: 42.377693, longitude: -71.088967},
{latitude: 42.377815, longitude: -71.08902},
{latitude: 42.378021, longitude: -71.089074},
{latitude: 42.379051, longitude: -71.089318},
{latitude: 42.379047, longitude: -71.089325},
{latitude: 42.379596, longitude: -71.089463},
{latitude: 42.37989, longitude: -71.089547},
{latitude: 42.380283, longitude: -71.089676},
{latitude: 42.380477, longitude: -71.08973},
{latitude: 42.381019, longitude: -71.089898},
{latitude: 42.381256, longitude: -71.089959},
{latitude: 42.381439, longitude: -71.09002},
{latitude: 42.381584, longitude: -71.090088},
{latitude: 42.381736, longitude: -71.090172},
{latitude: 42.381896, longitude: -71.090264},
{latitude: 42.382053, longitude: -71.090386},
{latitude: 42.382293, longitude: -71.090592},
{latitude: 42.382553, longitude: -71.090783},
{latitude: 42.382869, longitude: -71.090966},
{latitude: 42.382869, longitude: -71.090966},
{latitude: 42.383113, longitude: -71.091149},
{latitude: 42.383266, longitude: -71.091248},
{latitude: 42.38335, longitude: -71.091294},
{latitude: 42.383396, longitude: -71.091317},
{latitude: 42.383438, longitude: -71.091332},
{latitude: 42.383499, longitude: -71.091347},
{latitude: 42.383563, longitude: -71.091355},
{latitude: 42.383655, longitude: -71.091355},
{latitude: 42.383743, longitude: -71.091355},
{latitude: 42.383766, longitude: -71.091446},
{latitude: 42.383789, longitude: -71.091523},
{latitude: 42.383865, longitude: -71.091691},
{latitude: 42.383934, longitude: -71.091797},
{latitude: 42.384059, longitude: -71.091935},
{latitude: 42.3843, longitude: -71.092171},
{latitude: 42.384567, longitude: -71.092454},
{latitude: 42.384719, longitude: -71.092621},
{latitude: 42.384849, longitude: -71.092782},
{latitude: 42.385513, longitude: -71.093461},
{latitude: 42.385791, longitude: -71.093735},
{latitude: 42.386093, longitude: -71.094056},
{latitude: 42.386383, longitude: -71.094353},
{latitude: 42.3866, longitude: -71.094567},
{latitude: 42.3866, longitude: -71.094567},
{latitude: 42.386684, longitude: -71.094651},
{latitude: 42.386909, longitude: -71.09488},
{latitude: 42.387203, longitude: -71.09517},
{latitude: 42.387252, longitude: -71.095215},
{latitude: 42.387466, longitude: -71.095437},
{latitude: 42.38766, longitude: -71.09565},
{latitude: 42.387813, longitude: -71.09581},
{latitude: 42.387958, longitude: -71.095978},
{latitude: 42.388263, longitude: -71.096245},
{latitude: 42.388309, longitude: -71.096283},
{latitude: 42.38866, longitude: -71.096657},
{latitude: 42.389141, longitude: -71.097161},
{latitude: 42.389884, longitude: -71.097954},
{latitude: 42.390422, longitude: -71.098481},
{latitude: 42.390888, longitude: -71.098954},
{latitude: 42.391139, longitude: -71.099213},
{latitude: 42.391319, longitude: -71.099404},
{latitude: 42.391895, longitude: -71.099999},
{latitude: 42.392478, longitude: -71.100571},
{latitude: 42.393283, longitude: -71.101189},
{latitude: 42.393585, longitude: -71.101441},
{latitude: 42.3941, longitude: -71.101838},
{latitude: 42.394691, longitude: -71.10228},
{latitude: 42.395191, longitude: -71.102707},
{latitude: 42.395668, longitude: -71.103081},
{latitude: 42.395732, longitude: -71.103127},
{latitude: 42.396408, longitude: -71.103661},
{latitude: 42.396896, longitude: -71.10405},
{latitude: 42.397151, longitude: -71.104241},
{latitude: 42.397361, longitude: -71.104394},
{latitude: 42.397361, longitude: -71.104394},
{latitude: 42.397567, longitude: -71.10505},
{latitude: 42.397773, longitude: -71.105706},
{latitude: 42.397888, longitude: -71.106057},
{latitude: 42.398288, longitude: -71.107331},
{latitude: 42.398418, longitude: -71.10775},
{latitude: 42.398498, longitude: -71.107972},
{latitude: 42.3987, longitude: -71.10862},
{latitude: 42.398941, longitude: -71.109345},
{latitude: 42.399204, longitude: -71.110077},
{latitude: 42.399223, longitude: -71.110131},
{latitude: 42.399299, longitude: -71.11036},
{latitude: 42.399326, longitude: -71.110444},
{latitude: 42.399356, longitude: -71.11052},
{latitude: 42.399387, longitude: -71.110604},
{latitude: 42.399436, longitude: -71.110756},
{latitude: 42.399482, longitude: -71.110909},
{latitude: 42.399658, longitude: -71.111428},
{latitude: 42.399658, longitude: -71.111435},
{latitude: 42.399978, longitude: -71.11168},
{latitude: 42.402793, longitude: -71.113793},
{latitude: 42.403869, longitude: -71.114586},
{latitude: 42.404373, longitude: -71.11496},
{latitude: 42.404811, longitude: -71.115288},
{latitude: 42.405147, longitude: -71.11554},
{latitude: 42.405151, longitude: -71.115548},
{latitude: 42.405197, longitude: -71.115578},
{latitude: 42.405197, longitude: -71.115578},
{latitude: 42.405181, longitude: -71.115647},
{latitude: 42.405124, longitude: -71.11586},
{latitude: 42.405075, longitude: -71.116036},
{latitude: 42.405021, longitude: -71.116448},
{latitude: 42.405048, longitude: -71.116593},
{latitude: 42.405059, longitude: -71.116646},
{latitude: 42.405078, longitude: -71.116768},
{latitude: 42.405151, longitude: -71.117028},
{latitude: 42.405246, longitude: -71.117196},
{latitude: 42.405296, longitude: -71.117287},
{latitude: 42.405433, longitude: -71.117409},
{latitude: 42.405429, longitude: -71.117409},
{latitude: 42.405639, longitude: -71.117447},
{latitude: 42.405578, longitude: -71.117928},
{latitude: 42.405578, longitude: -71.117928},
{latitude: 42.405559, longitude: -71.118134},
{latitude: 42.405555, longitude: -71.118264},
{latitude: 42.405555, longitude: -71.118279},
{latitude: 42.405555, longitude: -71.11834},
{latitude: 42.405559, longitude: -71.118584},
{latitude: 42.405662, longitude: -71.119103},
{latitude: 42.4057, longitude: -71.119195},
{latitude: 42.405857, longitude: -71.119576},
{latitude: 42.405879, longitude: -71.119637},
{latitude: 42.406105, longitude: -71.120232},
{latitude: 42.406139, longitude: -71.120324},
{latitude: 42.406139, longitude: -71.120324},
{latitude: 42.40541, longitude: -71.120804},
{latitude: 42.405399, longitude: -71.120812},
{latitude: 42.405403, longitude: -71.120812},
{latitude: 42.4052, longitude: -71.120247},
{latitude: 42.405143, longitude: -71.120102},
{latitude: 42.405075, longitude: -71.119912},
{latitude: 42.405002, longitude: -71.119729},
{latitude: 42.404949, longitude: -71.119576},
{latitude: 42.404937, longitude: -71.119545},
{latitude: 42.404819, longitude: -71.119088},
{latitude: 42.404811, longitude: -71.119034}
]

var styles = StyleSheet.create({
  description: {

    fontSize: 12,
    textAlign: 'right',
    color: '#000000',
    fontFamily: 'Superclarendon',
    width: windowSize.width*.40,
    textAlign: 'right',
    paddingLeft: 20
  },

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  background: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'column'
  },
  navBar: {
    backgroundColor: '#0000FF'
    },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
  time: {
    fontFamily: 'Avenir',
    fontSize: 18
  },
  timeDigit: {
    fontWeight: 'bold'
  },

  borderStyle: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 20,
    marginRight: 20

  }


});


class ShuttlePage extends Component {
  constructor() {
    super();
    this.state = { necETA: '--', artsETA: '--', foodETA: '--', fiveETA: '--', davisETA: '--', ccETA: '--', olinETA: '--',  isLoading: true, joeyLatBoston: 0, joeyLngBoston: 0,joeyLatDavis: 0, joeyLngDavis: 0, joeyLatSMFA: 0, joeyLngSMFA: 0, animating: true, tabs: ['Davis Sq', 'SMFA/NEC', 'Boston Ave'],
    currentTab: 'Davis Sq', polylines: [] };

  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchDavis();
    this.fetchCC();
    this.fetchOlin();
    this.getJoey();
    this.fetchArts();
    this.fetchNEC();
    this.fetchSMFA();
    this.fetch574();
    this.fetchFoods();
  }

  closeActivityIndicator() {
        setTimeout(() => {
           this.setState({animating: false});
        }, 2000);
     }

  componentDidMount(){
  this.closeActivityIndicator();
  this.timer = setInterval(()=> this.fetchDavis(), 30000)
  this.timer = setInterval(()=> this.fetchCC(), 30000)
  this.timer = setInterval(()=> this.fetchOlin(), 30000)
  this.timer = setInterval(()=> this.getJoey(), 250)
  this.timer = setInterval(()=> this.fetchArts(), 30000)
  this.timer = setInterval(()=> this.fetchNEC(), 30000)
  this.timer = setInterval(()=> this.fetchSMFA(), 30000)
  this.timer = setInterval(()=> this.fetch574(), 30000)
  this.timer = setInterval(()=> this.fetchFoods(), 30000)
 }

 componentWillUnmount() {
   this.Mounted = false;
 }

 handleTabPressed(tab, e) {
   this.setState({
     currentTab: tab,
   });
 }

async fetch574() {
     try {
       let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=26');
       let responseJson = await response.json();
       if (this.Mounted) {
         this.setState({ fiveETA: responseJson.etas[26].etas[0] ? responseJson.etas[26].etas[0].avg : '-- ', isLoading: false });
       }
     } catch(error) {
       console.error(error);
     }
   }

async fetchFoods() {
     try {
       let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=32');
       let responseJson = await response.json();
       if (this.Mounted) {
         this.setState({ foodETA: responseJson.etas[32].etas[0] ? responseJson.etas[32].etas[0].avg : '-- ', isLoading: false });
       }
     } catch(error) {
       console.error(error);
     }
   }


async fetchSMFA() {
     try {
       let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=14');
       let responseJson = await response.json();
       if (this.Mounted) {
         this.setState({ smfaETA: responseJson.etas[14].etas[0] ? responseJson.etas[14].etas[0].avg : '-- ', isLoading: false });
       }
     } catch(error) {
       console.error(error);
     }
   }

async fetchNEC() {
     try {
       let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=13');
       let responseJson = await response.json();
       if (this.Mounted) {
         this.setState({ necETA: responseJson.etas[13].etas[0] ? responseJson.etas[13].etas[0].avg : '-- ', isLoading: false });
       }
     } catch(error) {
       console.error(error);
     }
   }


async fetchArts() {
     try {
       let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=12');
       let responseJson = await response.json();
       if (this.Mounted) {
         this.setState({ artsETA: responseJson.etas[12].etas[0] ? responseJson.etas[12].etas[0].avg : '-- ', isLoading: false });
       }
     } catch(error) {
       console.error(error);
     }
   }



async fetchDavis() {
     try {
       let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=2');
       let responseJson = await response.json();
       if (this.Mounted) {
         this.setState({ davisETA: responseJson.etas[2].etas[0] ? responseJson.etas[2].etas[0].avg : '-- ', isLoading: false });
       }
     } catch(error) {
       console.error(error);
     }
   }

async fetchCC() {
        try {
          let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=1');
          let responseJson = await response.json();
          if (this.Mounted) {
            this.setState({ ccETA: responseJson.etas[1].etas[0] ? responseJson.etas[1].etas[0].avg : '-- ', isLoading: false });
          }
        } catch(error) {
          console.error(error);
        }
      }

async fetchOlin() {
        try {
          let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=6');
          let responseJson = await response.json();
          if (this.Mounted) {
            this.setState({ olinETA: responseJson.etas[6].etas[0] ? responseJson.etas[6].etas[0].avg : '-- ', isLoading: false });
          }
        } catch(error) {
          console.error(error);
        }
      }

async getJoey() {
        try {
          let response = await fetch('https://tufts.doublemap.com/map/v2/buses');
          let responseJson = await response.json();
          if (this.Mounted) {
            for (var i = 0; i < responseJson.length; i++){
            if(responseJson[i].route == 1 || responseJson[i].route == 20 || responseJson[i].route == 6){
              this.setState({ joeyLatDavis: responseJson[i] ? responseJson[i].lat : 0, joeyLngDavis: responseJson[i] ? responseJson[i].lon : 0 });
            }else if(responseJson[i].route == 9) {
              this.setState({ joeyLatSMFA: responseJson[i] ? responseJson[i].lat : 0, joeyLngSMFA: responseJson[i] ? responseJson[i].lon : 0 });

            }else if(responseJson[i].route == 8) {
              this.setState({ joeyLatBoston: responseJson[i] ? responseJson[i].lat : 0, joeyLngBoston: responseJson[i] ? responseJson[i].lon : 0 });

            }

            } 
          }
        } catch(error) {
          console.error(error);
        }
}

  render() {
    const goBack = () => Actions.pop();
      if (this.state.isLoading) {
        return (
          <Text></Text>
          )
      }

      else if (this.state.currentTab == 'Davis Sq') {
    return (

      <View style={{height: windowSize.height}} >
        <ScrollView style={styles.background}>
      <MainHeader />
      <SubHeader tabs={this.state.tabs}
                 currentTab={this.state.currentTab}
                 onTabPressed={(tab, e) => this.handleTabPressed(tab, e)}/>
    <ArticleCard style={{ backgroundColor: 'white'}}>
      <Text style={{ fontSize: 20, fontFamily: 'Superclarendon', paddingLeft: 10, paddingTop: 10 }}>DAVIS SHUTTLE</Text>
      <View style={{paddingTop: 10,
      borderBottomWidth: 2,
      borderColor: 'black',
      height: 5,
      marginLeft: 10,
      marginRight: 10}}/>
      <MapView
        style={{height: windowSize.height/3, margin: 40}}
    initialRegion={{
      latitude: 42.405804,
      longitude: -71.11956,
      latitudeDelta: 0.02,
      longitudeDelta: 0.01,
    }}
    >
          <MapView.Marker
            onPress={() => this.setState({ marker1: !this.state.marker1 })}
            coordinate={{
              latitude: this.state.joeyLatDavis,
              longitude: this.state.joeyLngDavis,
            }}

            centerOffset={{ x: 0, y: 0 }}
            anchor={{ x: 0.69, y: 1 }}
            image= {this.state.marker1 ? flagBlueImg : flagBlueImg}
          >

      

                      <Text style={styles.marker}></Text>




          </MapView.Marker>
                      <MapView.Polyline
              //key={polyline.id}
              coordinates={joeyRoute}
              strokeColor="rgb(5,0,255)"
              //fillColor="rgba(255,0,0,0.5)"
              //strokeWidth={1}
            />
      </MapView>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.description}>Davis Square</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.davisETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
            <Text style={styles.description}>Upper Campus Center</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.ccETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
            <Text style={styles.description}>Olin Hall</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.olinETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
        </View>
    </ArticleCard>

      </ScrollView>
       <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./assets/images/backarrow.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
        </View>


    );
  } else if (this.state.currentTab == 'SMFA/NEC'){
  return (

      <View style={{height: windowSize.height}} >
        <ScrollView style={styles.background}>
      <MainHeader />
      <SubHeader tabs={this.state.tabs}
                 currentTab={this.state.currentTab}
                 onTabPressed={(tab, e) => this.handleTabPressed(tab, e)}/>
    <ArticleCard style={{ backgroundColor: 'white'}}>
      <Text style={{ fontSize: 20, fontFamily: 'Superclarendon', paddingLeft: 10, paddingTop: 10 }}>SMFA/NEC</Text>
      <View style={{paddingTop: 10,
      borderBottomWidth: 2,
      borderColor: 'black',
      height: 5,
      marginLeft: 10,
      marginRight: 10}}/>
      <MapView
        style={{height: windowSize.height/3, margin: 40}}
    initialRegion={{
      latitude: 42.405804,
      longitude: -71.11956,
      latitudeDelta: 0.04,
      longitudeDelta: 0.02,
    }}
    >
          <MapView.Marker
            onPress={() => this.setState({ marker1: !this.state.marker1 })}
            coordinate={{
              latitude: this.state.joeyLatSMFA,
              longitude: this.state.joeyLngSMFA,
            }}

            centerOffset={{ x: 0, y: 0 }}
            anchor={{ x: 0.69, y: 1 }}
            image= {this.state.marker1 ? flagBlueImg : flagBlueImg}
          >

      

                      <Text style={styles.marker}></Text>




          </MapView.Marker>
                      <MapView.Polyline
              //key={polyline.id}
              coordinates={smfaRoute}
              strokeColor="rgb(5,0,255)"
              //fillColor="rgba(255,0,0,0.5)"
              //strokeWidth={1}
            />
      </MapView>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.description}>Aidekman Arts Center</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.artsETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
            <Text style={styles.description}>NEC</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.necETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
            <Text style={styles.description}>SMFA</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.smfaETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
        </View>
    </ArticleCard>

      </ScrollView>
       <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./assets/images/backarrow.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
        </View>

    );
} else if (this.state.currentTab == 'Boston Ave'){


  return (

      <View style={{height: windowSize.height}} >
        <ScrollView style={styles.background}>
      <MainHeader />
      <SubHeader tabs={this.state.tabs}
                 currentTab={this.state.currentTab}
                 onTabPressed={(tab, e) => this.handleTabPressed(tab, e)}/>
    <ArticleCard style={{ backgroundColor: 'white'}}>
      <Text style={{ fontSize: 20, fontFamily: 'Superclarendon', paddingLeft: 10, paddingTop: 10 }}>Boston Ave</Text>
      <View style={{paddingTop: 10,
      borderBottomWidth: 2,
      borderColor: 'black',
      height: 5,
      marginLeft: 10,
      marginRight: 10}}/>
      <MapView
        style={{height: windowSize.height/3, margin: 40}}
    initialRegion={{
      latitude: 42.5,
      longitude:  -71,
      latitudeDelta: 0.02,
      longitudeDelta: 0.01,
    }}
    >
          <MapView.Marker
            onPress={() => this.setState({ marker1: !this.state.marker1 })}
            coordinate={{
              latitude: this.state.joeyLatBoston,
              longitude: this.state.joeyLngBoston,
            }}

            centerOffset={{ x: 0, y: 0 }}
            anchor={{ x: 0.69, y: 1 }}
            image= {this.state.marker1 ? flagBlueImg : flagBlueImg}
          >

      

                      <Text style={styles.marker}></Text>




          </MapView.Marker>
                      <MapView.Polyline
              //key={polyline.id}
              coordinates={bostonRoute}
              strokeColor="rgb(5,0,255)"
              //fillColor="rgba(255,0,0,0.5)"
              //strokeWidth={1}
            />
      </MapView>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.description}>574 Boston Ave</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.fiveETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
            <Text style={styles.description}>Whole Foods</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.foodETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
      
        </View>
    </ArticleCard>

      </ScrollView>
       <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./assets/images/backarrow.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
        </View>


    );

}
}
}
export default ShuttlePage;