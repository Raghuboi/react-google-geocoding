// https://developers.google.com/maps/documentation/javascript/place-types
export type PlaceType =
  | "accounting"
  | "airport"
  | "amusement_park"
  | "aquarium"
  | "art _gallery"
  | "atm"
  | "bakery"
  | "bank"
  | "bar"
  | "beauty_salon"
  | "bicycle_store"
  | "book_store"
  | "bowling_alley"
  | "bus_station"
  | "cafe"
  | "campground"
  | "car_dealer"
  | "car_rental"
  | "car_repair"
  | "car_wash"
  | "casino"
  | "cemetery"
  | "church"
  | "city_hall"
  | "clothing_store"
  | "convenience_store"
  | "courthouse"
  | "dentist"
  | "department_store"
  | "doctor"
  | "drugstore"
  | "electrician"
  | "electronics_store"
  | "embassy"
  | "fire_station"
  | "florist"
  | "funeral_home"
  | "furniture_store"
  | "gas_station"
  | "gym"
  | "hair_care"
  | "hardware_store"
  | "hindu_temple"
  | "home_goods_store"
  | "hospital"
  | "insurance_agency"
  | "jewelry_store"
  | "laundry"
  | "lawyer"
  | "library"
  | "light_rail_station"
  | "liquor_store"
  | "local_government_office"
  | "locksmith"
  | "lodging"
  | "meal_delivery"
  | "meal_takeaway"
  | "mosque"
  | "movie_rental"
  | "movie_theater"
  | "moving_company"
  | "museum"
  | "night_club"
  | "painter"
  | "park"
  | "parking"
  | "pet_store"
  | "pharmacy"
  | "physiotherapist"
  | "plumber"
  | "police"
  | "post_office"
  | "primary_school"
  | "real_estate_agency"
  | "restaurant"
  | "roofing_contractor"
  | "rv_park"
  | "school"
  | "secondary_school"
  | "shoe_store"
  | "shopping_mall"
  | "spa"
  | "stadium"
  | "storage"
  | "store"
  | "subway_station"
  | "supermarket"
  | "synagogue"
  | "taxi_stand"
  | "tourist_attraction"
  | "train_station"
  | "transit_station"
  | "travel_agency"
  | "university"
  | "veterinary_care"
  | "zoo"
  | "administrative_area_level_1"
  | "administrative_area_level_2"
  | "administrative_area_level_3"
  | "administrative_area_level_4"
  | "administrative_area_level_5"
  | "administrative_area_level_6"
  | "administrative_area_level_7"
  | "archipelago"
  | "colloquial_area"
  | "continent"
  | "country"
  | "establishment"
  | "finance"
  | "floor"
  | "food"
  | "general_contractor"
  | "geocode"
  | "health"
  | "intersection"
  | "landmark"
  | "locality"
  | "natural_feature"
  | "neighborhood"
  | "place_of_worship"
  | "plus_code"
  | "point_of_interest"
  | "political"
  | "post_box"
  | "postal_code"
  | "postal_code_prefix"
  | "postal_code_suffix"
  | "postal_town"
  | "premise"
  | "room"
  | "route"
  | "street_address"
  | "street_number"
  | "sublocality"
  | "sublocality_level_1"
  | "sublocality_level_2"
  | "sublocality_level_3"
  | "sublocality_level_4"
  | "sublocality_level_5"
  | "subpremise"
  | "town_square";

export type RegionCode =
  | "AD" // Andorra
  | "AE" // United Arab Emirates
  | "AF" // Afghanistan
  | "AG" // Antigua and Barbuda
  | "AI" // Anguilla
  | "AL" // Albania
  | "AM" // Armenia
  | "AO" // Angola
  | "AR" // Argentina
  | "AS" // American Samoa
  | "AT" // Austria
  | "AU" // Australia
  | "AW" // Aruba
  | "AX" // Åland Islands
  | "AZ" // Azerbaijan
  | "BA" // Bosnia and Herzegovina
  | "BB" // Barbados
  | "BD" // Bangladesh
  | "BE" // Belgium
  | "BF" // Burkina Faso
  | "BG" // Bulgaria
  | "BH" // Bahrain
  | "BI" // Burundi
  | "BJ" // Benin
  | "BL" // Saint Barthélemy
  | "BM" // Bermuda
  | "BN" // Brunei Darussalam
  | "BO" // Bolivia
  | "BQ" // Bonaire, Sint Eustatius and Saba
  | "BR" // Brazil
  | "BS" // Bahamas
  | "BT" // Bhutan
  | "BV" // Bouvet Island
  | "BW" // Botswana
  | "BY" // Belarus
  | "BZ" // Belize
  | "CA" // Canada
  | "CC" // Cocos (Keeling) Islands
  | "CD" // Democratic Republic of the Congo
  | "CF" // Central African Republic
  | "CG" // Republic of the Congo
  | "CH" // Switzerland
  | "CI" // Côte d'Ivoire
  | "CK" // Cook Islands
  | "CL" // Chile
  | "CM" // Cameroon
  | "CN" // China
  | "CO" // Colombia
  | "CR" // Costa Rica
  | "CU" // Cuba
  | "CV" // Cape Verde
  | "CW" // Curaçao
  | "CX" // Christmas Island
  | "CY" // Cyprus
  | "CZ" // Czech Republic
  | "DE" // Germany
  | "DJ" // Djibouti
  | "DK" // Denmark
  | "DM" // Dominica
  | "DO" // Dominican Republic
  | "DZ" // Algeria
  | "EC" // Ecuador
  | "EE" // Estonia
  | "EG" // Egypt
  | "EH" // Western Sahara
  | "ER" // Eritrea
  | "ES" // Spain
  | "ET" // Ethiopia
  | "FI" // Finland
  | "FJ" // Fiji
  | "FM" // Micronesia
  | "FO" // Faroe Islands
  | "FR" // France
  | "GA" // Gabon
  | "GB" // United Kingdom
  | "GD" // Grenada
  | "GE" // Georgia
  | "GF" // French Guiana
  | "GG" // Guernsey
  | "GH" // Ghana
  | "GI" // Gibraltar
  | "GL" // Greenland
  | "GM" // Gambia
  | "GN" // Guinea
  | "GP" // Guadeloupe
  | "GQ" // Equatorial Guinea
  | "GR" // Greece
  | "GT" // Guatemala
  | "GU" // Guam
  | "GW" // Guinea-Bissau
  | "GY" // Guyana
  | "HK" // Hong Kong
  | "HM" // Heard Island and McDonald Islands
  | "HN" // Honduras
  | "HR" // Croatia
  | "HT" // Haiti
  | "HU" // Hungary
  | "ID" // Indonesia
  | "IE" // Ireland
  | "IL" // Israel
  | "IM" // Isle of Man
  | "IN" // India
  | "IO" // British Indian Ocean Territory
  | "IQ" // Iraq
  | "IR" // Iran
  | "IS" // Iceland
  | "IT" // Italy
  | "JE" // Jersey
  | "JM" // Jamaica
  | "JO" // Jordan
  | "JP" // Japan
  | "KE" // Kenya
  | "KG" // Kyrgyzstan
  | "KH" // Cambodia
  | "KI" // Kiribati
  | "KM" // Comoros
  | "KN" // Saint Kitts and Nevis
  | "KP" // North Korea
  | "KR" // South Korea
  | "KW" // Kuwait
  | "KY" // Cayman Islands
  | "KZ" // Kazakhstan
  | "LA" // Laos
  | "LB" // Lebanon
  | "LC" // Saint Lucia
  | "LI" // Liechtenstein
  | "LK" // Sri Lanka
  | "LR" // Liberia
  | "LS" // Lesotho
  | "LT" // Lithuania
  | "LU" // Luxembourg
  | "LV" // Latvia
  | "LY" // Libya
  | "MA" // Morocco
  | "MC" // Monaco
  | "MD" // Moldova
  | "ME" // Montenegro
  | "MF" // Saint Martin (French part)
  | "MG" // Madagascar
  | "MH" // Marshall Islands
  | "MK" // North Macedonia
  | "ML" // Mali
  | "MM" // Myanmar
  | "MN" // Mongolia
  | "MO" // Macao
  | "MP" // Northern Mariana Islands
  | "MQ" // Martinique
  | "MR" // Mauritania
  | "MS" // Montserrat
  | "MT" // Malta
  | "MU" // Mauritius
  | "MV" // Maldives
  | "MW" // Malawi
  | "MX" // Mexico
  | "MY" // Malaysia
  | "MZ" // Mozambique
  | "NA" // Namibia
  | "NC" // New Caledonia
  | "NE" // Niger
  | "NF" // Norfolk Island
  | "NG" // Nigeria
  | "NI" // Nicaragua
  | "NL" // Netherlands
  | "NO" // Norway
  | "NP" // Nepal
  | "NR" // Nauru
  | "NU" // Niue
  | "NZ" // New Zealand
  | "OM" // Oman
  | "PA" // Panama
  | "PE" // Peru
  | "PF" // French Polynesia
  | "PG" // Papua New Guinea
  | "PH" // Philippines
  | "PK" // Pakistan
  | "PL" // Poland
  | "PM" // Saint Pierre and Miquelon
  | "PN" // Pitcairn Islands
  | "PR" // Puerto Rico
  | "PT" // Portugal
  | "PW" // Palau
  | "PY" // Paraguay
  | "QA" // Qatar
  | "RE" // Réunion
  | "RO" // Romania
  | "RS" // Serbia
  | "RU" // Russia
  | "RW" // Rwanda
  | "SA" // Saudi Arabia
  | "SB" // Solomon Islands
  | "SC" // Seychelles
  | "SD" // Sudan
  | "SE" // Sweden
  | "SG" // Singapore
  | "SH" // Saint Helena
  | "SI" // Slovenia
  | "SJ" // Svalbard and Jan Mayen
  | "SK" // Slovakia
  | "SL" // Sierra Leone
  | "SM" // San Marino
  | "SN" // Senegal
  | "SO" // Somalia
  | "SR" // Suriname
  | "SS" // South Sudan
  | "ST" // São Tomé and Príncipe
  | "SV" // El Salvador
  | "SX" // Sint Maarten (Dutch part)
  | "SY" // Syria
  | "SZ" // Eswatini
  | "TC" // Turks and Caicos Islands
  | "TD" // Chad
  | "TF" // French Southern Territories
  | "TG" // Togo
  | "TH" // Thailand
  | "TJ" // Tajikistan
  | "TK" // Tokelau
  | "TL" // Timor-Leste
  | "TM" // Turkmenistan
  | "TN" // Tunisia
  | "TO" // Tonga
  | "TR" // Turkey
  | "TT" // Trinidad and Tobago
  | "TV" // Tuvalu
  | "TW" // Taiwan
  | "TZ" // Tanzania
  | "UA" // Ukraine
  | "UG" // Uganda
  | "UM" // United States Minor Outlying Islands
  | "US" // United States
  | "UY" // Uruguay
  | "UZ" // Uzbekistan
  | "VA" // Vatican City
  | "VC" // Saint Vincent and the Grenadines
  | "VE" // Venezuela
  | "VG" // British Virgin Islands
  | "VI" // United States Virgin Islands
  | "VN" // Vietnam
  | "VU" // Vanuatu
  | "WF" // Wallis and Futuna
  | "WS" // Samoa
  | "YE" // Yemen
  | "YT" // Mayotte
  | "ZA" // South Africa
  | "ZM" // Zambia
  | "ZW"; // Zimbabwe
