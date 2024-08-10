// Language content data
const content = {
    en: {
        "1stText": "Enjoy big movies, hit series and more from ₹ 149.",
        "2ndText": "Join today. Cancel anytime.",
        "3rdText": "Ready to watch? Enter your email to create or restart your membership.",
        "signIn": "Sign In",
        "4thText": "Enjoy on your TV",
        "5thText": "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        "6thText": "Download your shows to watch offline",
        "7thText": "Save your favourites easily and always have something to watch.",
        "8thText": "Watch everywhere",
        "ready": "Ready to watch? Enter your email to create or restart your membership.",
        "9thText": "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        "10thText": "Create profiles for kids",
        "11thText": "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
        "12thText": "Frequently Asked Questions",
        "13thText": "What is Netflix?",
        "15thText": "How much does Netflix cost?",
        "17thText": "What can I watch on Netflix?",
        "19thText": "Where can I watch?",
        "footerItem1": "FAQ",
        "footerItem2": "Investor Relations",
        "footerItem3": "Privacy",
        "footerItem4": "Speed Test",
        "footerItem5": "Account",
        "footerItem6": "Ways to watch",
        "footerItem7": "Corporate Information",
        "footerItem8": "Only on Netflix",
        "footerItem9": "Help Centre",
        "footerItem10": "Jobs",
        "footerItem11": "Cookie Preferences",
        "footerItem12": "Legal Notices",
        "footerItem13": "Media Centre",
        "footerItem14": "Terms of Use",
        "footerItem15": "Contact Us",
        "footerItemNetflix": "Netflix India",
        "inputEmail": "Email Address",
        "inputEmail1": "Email Address",
        "getStd": "Get Started",
        "getStd1": "Get Started",
        
    },


    hi: {
        "1stText": "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ",
        "2ndText": "जहां चाहें देखें. जब चाहें कैंसल करें.",
        "3rdText": "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
        "signIn": "साइन इन करें",
        "4thText": "अपने टीवी पर आनंद लें",
        "5thText": "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.",
        "6thText": "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
        "7thText": "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.",
        "8thText": "हर जगह देखें",
        "ready": "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
        "9thText": "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.",
        "10thText": "बच्चों के लिए प्रोफ़ाइल बनाएं",
        "11thText": "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.",
        "12thText": "अक्सर पूछे जाने वाले सवाल",
        "13thText": "Netflix क्या है?",
        "15thText": "Netflix की कीमत कितनी है?",
        "17thText": "मैं Netflix पर क्या देख सकता/सकती हूं?",
        "19thText": "मैं कहां देख सकता हूं?",
        "footerItem1": "FAQ",
        "footerItem2": "इंवेस्टर संबंध",
        "footerItem3": "प्रायवेसी",
        "footerItem4": "स्पीड टेस्ट",
        "footerItem5": "सहायता केंद्र",
        "footerItem6": "नौकरियां",
        "footerItem7": "कुकी प्रेफ़रेंस",
        "footerItem8": "कानूनी सूचनाएं",
        "footerItem9": "अकाउंट",
        "footerItem10": "देखने के तरीके",
        "footerItem11": "कॉरपोरेट जानकारी",
        "footerItem12": "सिर्फ़ Netflix पर",
        "footerItem13": "मीडिया केंद्र",
        "footerItem14": "उपयोग की शर्तें",
        "footerItem15": "हमसे संपर्क करें",
        "footerItemNetflix": "Netflix भारत",
        "inputEmail": "ईमेल एड्रेस",
        "inputEmail1": "ईमेल एड्रेस",
        "getStd": "शुरू करें",
        "getStd1": "शुरू करें",

        
    }
};

// Function to switch language
function switchLanguage(language) {
    // console.log(language);
    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
        const key = el.id;
        if (content[language][key]) {
            el.textContent = content[language][key];
            // console.log(language)
        }

        // Update both select elements to reflect the chosen language
        document.getElementById('lang1').value = language;
        document.getElementById('lang2').value = language;
        
    });
}

// Event listener for language change
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lang1').addEventListener('change', function() {
        const selectedLanguage = this.value === "hi" ? "hi" : "en";
        switchLanguage(selectedLanguage);
        
        // Update the email placeholder
        const emailInput1 = document.getElementById('inputEmail');
        emailInput1.placeholder = content[selectedLanguage]['inputEmail'];
        // Update the email placeholder
        const emailInput2 = document.getElementById('inputEmail1');
        emailInput2.placeholder = content[selectedLanguage]['inputEmail1'];

        //Change the Contect Number
        const no = document.getElementById('21thText');
        no.innerText = "कोई सवाल है? ";
        no.setAttribute("id" , "21thText");
        const newa = document.createElement('a');
        newa.setAttribute( "href" , "tel:000-800-919-1694");
        newa.innerText = "000-800-919-1694";
        const a = document.getElementById('21thText');
        a.append(newa);
        const call = document.createElement('span');
        call.setAttribute("id" , "call1");
        call.innerText = " पर कॉल करें"
        const b = document.getElementById('21thText');
        b.append(call);

        
        
        
        // Update the "Get Started" button text
        const getStartedButton1 = document.getElementById('getStd');
        getStartedButton1.textContent = content[selectedLanguage]['getStd'];
        // Update the "Get Started" button text
        const getStartedButton2 = document.getElementById('getStd1');
        getStartedButton2.textContent = content[selectedLanguage]['getStd1'];
        
        // Change the image based on the language
        const imgElement = document.getElementById('imgChange'); // Use the correct id for your img element
        if (imgElement) {
            const imgSrc = selectedLanguage === 'hi' ? 'assets/images/childrenHindi.png' : 'https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d';
             imgElement.setAttribute('src', imgSrc);
             console.log("Image source updated to: ", imgElement.src);
            }
            
        
    });
    document.getElementById('lang2').addEventListener('change', function() {
        const selectedLanguage = this.value === "hi" ? "hi" : "en";
        switchLanguage(selectedLanguage);
        
        // Update the email placeholder
        const emailInput1 = document.getElementById('inputEmail');
        emailInput1.placeholder = content[selectedLanguage]['inputEmail'];
        // Update the email placeholder
        const emailInput2 = document.getElementById('inputEmail1');
        emailInput2.placeholder = content[selectedLanguage]['inputEmail1'];
        
        //Change the Contect Number
        const no = document.getElementById('21thText');
        no.innerText = "कोई सवाल है? ";
        no.setAttribute("id" , "21thText");
        const newa = document.createElement('a');
        newa.setAttribute( "href" , "tel:000-800-919-1694");
        newa.innerText = "000-800-919-1694";
        const a = document.getElementById('21thText');
        a.append(newa);
        const call = document.createElement('span');
        call.setAttribute("id" , "call1");
        call.innerText = " पर कॉल करें"
        const b = document.getElementById('21thText');
        b.append(call);

        
        // Update the "Get Started" button text
        const getStartedButton1 = document.getElementById('getStd');
        getStartedButton1.textContent = content[selectedLanguage]['getStd'];
        // Update the "Get Started" button text
        const getStartedButton2 = document.getElementById('getStd1');
        getStartedButton2.textContent = content[selectedLanguage]['getStd1'];
        
        // Change the image based on the language
        const imgElement = document.getElementById('imgChange'); // Use the correct id for your img element
        if (imgElement) {
            const imgSrc = selectedLanguage === 'hi' ? 'assets/images/childrenHindi.png' : 'https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d';
             imgElement.setAttribute('src', imgSrc);
             console.log("Image source updated to: ", imgElement.src);
            }
            
    });
        
});
// Default language set to English
switchLanguage('en');