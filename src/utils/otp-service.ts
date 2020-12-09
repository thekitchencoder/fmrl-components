const CHARSET = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', "-" , "." , "_" , "~", "%"
];

class OtpServiceController {

    constructor() { }

    encrypt(rawmsg: string, rawkey: string) {
        let out = '';
        let msg = encodeURIComponent(rawmsg);
        console.log(msg)
        let key = encodeURIComponent(rawkey);
        while(key.length < msg.length){
            key += key;
        }
        for (var i = 0; i < msg.length; i++) {
            var msgTmp = CHARSET.indexOf(msg[i]);
            var keyTmp = CHARSET.indexOf(key[i]);
            var tmp = msgTmp + keyTmp;

            //-- Roll over if value passes Z --
            if (tmp >= CHARSET.length)
                tmp -= CHARSET.length;

            out += CHARSET[tmp];
        }
        return out;
    }

    decrypt(msg: string, rawkey: string) {
        let out = '';
        let key = encodeURIComponent(rawkey);
        while(key.length < msg.length){
            key += key;
        }
        for (var i = 0; i < msg.length; i++) {
            var msgTmp = CHARSET.indexOf(msg[i]);
            var keyTmp = CHARSET.indexOf(key[i]);
            var tmp = msgTmp - keyTmp;

            //-- Roll over if value passes A --
            if (tmp < 0) {
                tmp += CHARSET.length;
            }

            out += CHARSET[tmp];
        }
        return decodeURIComponent(out);
    }

}

export const OtpService = new OtpServiceController();