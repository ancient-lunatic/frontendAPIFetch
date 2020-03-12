var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var use_api = /** @class */ (function () {
    function use_api() {
    }
    use_api.prototype.hitApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.url = "https://localhost:44382/values/getrecord";
                        return [4 /*yield*/, this.getApiCall(this.url)];
                    case 1:
                        data = _a.sent();
                        this.size = data["Table"].length;
                        //this.value.innerHTML = data[0]["date"];
                        console.log(data, "012d656ds4v654f65d4vdfvfv");
                        console.log(data);
                        this.dynamic_card(data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    use_api.prototype.getApiCall = function (URL) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(URL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, (response.json())];
                    case 2:
                        data = _a.sent();
                        console.log(data["Table"].length);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // console.log(data["Table"].length);
    use_api.prototype.dynamic_card = function (data) {
        var salutation = ["", "Mr.", "Mrs.", "Miss.", "Ms.", "Dr."];
        var gen = ["", "male", "female", "others"];
        var lene = this.size;
        var i;
        var containeer = document.getElementById("value");
        for (i = 0; i < this.size; i++) {
            containeer.innerHTML += "<div class=\"card text-white bg-primary mb-3\" style=\"max-width: 18rem;\">\n            <div class=\"card-header\" id=\"header" + i + "\"></div>\n            \n              <h5 class=\"card-title\" id = \"titile" + i + "\"></h5>\n              <h5 class=\"card-title\" id = \"geneder" + i + "\"></h5>\n              <p class=\"card-text\" id = \"info" + i + "\"></p>\n            </div>\n          </div>";
        }
        for (i = 0; i < this.size; i++) {
            var valuess = document.getElementById("titile" + i);
            // valuess.innerText="dsjfgsdg";
            valuess.innerText = "Name = " + salutation[data["Table"][i]["salutationId"]] + " " + data["Table"][i]["firstName"] + " " + (data["Table"][i]["middleName"] === null ? "" : data["Table"][i]["middleName"]) + " " + data["Table"][i]["lastName"];
            document.getElementById("geneder" + i).innerText = "Gender = " + gen[data["Table"][i]["employeeGenderId"]];
            document.getElementById("info" + i).innerText = "Birth Date = " + data["Table"][i]["birthDate"];
        }
    };
    return use_api;
}());
var a = new use_api();
a.hitApi();
// <div class="card-body" id="body${i}">
