const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVS4/jRBD+K6O+JkMcx7GTSCPh2I7zcF7Oc4bh0LbbdsfPdLfjcVYjgeAHIG677F44cgKxEpzgDP+CK6f9CcjJDDsHWAb7Ut1Vrvqq6qvyCxAnmKIRKkDnBUgJPkCGSpEVKQId0M1cFxFQBQ5kEHTAdDBfDHi3VrNvdvpxOeS7G7PuVY7OAMXJbsqv0+WddbeWV1p+Be6rIM2sENsfcLgKd169Yayp4IlGsmjqOQ7tLnQr2eao77pxxvWFQ7HnzUbrCtyXHiEmOPa01EcRIjAcoWIGMXkefHu8uu4qWfeOE+suaqqtI9zcebvCDmtBvmsFw6XU4BbM74fj58Gv89qgwiPHQxw6IgW1pM0w8AyeHdbjeWWd+kb/5m44s/chd4ZPsRcjZ+CgmGFWPLvumaIP+SO/XjuCLg0MqcftqCGYK91jk5qb54REHOsG+apvPw/4YLvPDdHtjs2tcH3cymQ0WcJ8K7uDbn+5asJa3VVsbzxFq+Ap8Bl55Erwf+o+726uEdHmElIlpGR6zi99S9O7a1sr2itlPktUv7/XXKoLz4M/Yqa6EHc9ebtrqCg6+JxEK7FH8kbO2alGEqO+bI4OGtSewIcsIx9CGYpDQR9GqkL33ob1J5nQzMdsOJkGdXVtqdFY42JdDliUktXNuELNiW8m5iEYpvYoTchM2zikMJT9cLNRlaVmmNSYyt7VKaMAFQMHdOr3VUCQhykjkOEkPt01+SqAzmGBbILYqbxgw/V38SzpTmdtNeB6um+iBCpwEBa1RVKpeJp6Q003H/ZngytQBSlJbEQpcvqYsoQUY0Qp9BAFnU8+rYIY3bFz48pwjXoVuJhQtoqzNEyg89jVRyW07SSL2aKIbaUUEAEd7v01YgzHHi3rmMWQ2D4+IMWHjIKOC0OK7qvAQQdso9If2N1cJ8d+T1rkozmcNXe98fhwKZeQ/SQ+m/CWwNmWKF2Kblu4FOw6vLRanHvZRhxstFvNOm/xoArww8yU3/xrC2uLidBLoswa6IpCDvv5srXdpCaTeHpqw7n2iCAHdBjJUBVY0A6ydJkEKP6AX8tVaxs0qcmTQmE4o1I0jqf1GScdgid+zz0FnRfv95SSOKU/ubHuybxUB1UQnSiIy8zbgiSJjXa71W52BPFj+lFe1hGm6UcxYqAKYlgag3dvvvr6Nr744+03F7fxH28/eyK/vo0v/nz9w8VtXL4XF8FtfPHbd6X029tS/PZB8e7Ny19v43dvXv5yPvx4Ovz8t/bVF6eLn87a78vDq8/Pmi//Nvrq81PkMv7vLy/Opj+V2T9Qo8zLQQzikIIOUIyioEzoazPd9aVc1+WxJyte2ftHKj3O5JnzU78ZYywli0out7ArNPWhw5PKscW8nO95vb4p1jhRVOeRdvUPTkAH9ELh2LSmtT0198G0fTNv8c7xbjyS0lFlcFMYs0ieZpZn+4HDp1xmbEeVYOLXIV7MK/MknoV3tYUFI9+4FkhG6tvR1MTd+VUZ7Uzpp8HYEdNZkjMft1XLOPqOWGyijDbtIcXWMenjUZxKbduFaD7etYSauEZNtb8KeHfrWZVEJVExWWZ8w9hwa+Lg2nq2jxT5vC1O2yp8+Evg0xy/eBgAF6PT0n3gxn9R6P0ocvfVJy4etvi/0L27TNCNkGSidqDybBBXpibeOvsarRnX44l/3TU5dGhPM48b+uD+/tMqSEPI3IREoANoZEFQBSGkTH6/SpY4QpTBKAWdutQQmyInNlpVEBVymi4YZI8bCMjlo1Ya4P4vNmVa4Z0IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

