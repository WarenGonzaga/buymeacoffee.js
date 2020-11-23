/*!
 * BuyMeACoffeeJS - https://github.com/WarenGonzaga/buymeacoffee.js#readme
 * A simple and lightweight but powerful Node.js client for Buy Me A Coffee API
 * Version: 1.0.8-beta.1
 * Github: https://github.com/WarenGonzaga/buymeacoffee.js
 * Licensed Under The MIT License: http://opensource.org/licenses/MIT
 * Copyright (c) 2020 Waren Gonzaga
 *
 * Facebook: @warengonzagaofficial
 * Twitter: @warengonzaga
 * Github: @warengonzaga
 * Website: warengonzaga.com
 */

const requester=require("./requester");class BMC{constructor(e){this.access_token=e}Supporters(e){this._sendRequest("supporters",e)}Subscriptions(e){this._sendRequest("subscriptions",e)}Extras(e){this._sendRequest("extras",e)}async _sendRequest(e,s){s((await requester.get(e,{headers:{Authorization:"Bearer "+this.access_token}})).data)}}module.exports=BMC;