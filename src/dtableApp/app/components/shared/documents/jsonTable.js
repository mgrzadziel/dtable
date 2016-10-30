(function (angular) {
    function jsonTableConfig() {
        return {
            templateUrl: "components/shared/documents/jsonTableView.html",
            controller: jsonTableController,
            bindings: {
                documents: "<"
            }
        };
    }

    function jsonTableController() {
        //String.prototype.format = function () {
        //    var args = arguments;

        //    return this.replace(/{(\d+)}/g, function (match, number) {
        //        return typeof args[number] !== "undefined" ? args[number] : "{" + number + "}";
        //    });
        //};

        //function ConvertJsonToTable(parsedJson, tableId, tableClassName, linkText) {
        //    //Patterns for links and NULL value
        //    var italic = "<i>{0}</i>";
        //    var link = linkText ? '<a href="{0}">' + linkText + "</a>" :
        //                          '<a href="{0}">{0}</a>';

        //    //Pattern for table
        //    var idMarkup = tableId ? ' id="' + tableId + '"' : "";

        //    var classMarkup = tableClassName ? ' class="' + tableClassName + '"' : "";

        //    var tbl = '<table border="1" cellpadding="1" cellspacing="1"' + idMarkup + classMarkup + ">{0}{1}</table>";

        //    //Patterns for table content
        //    var th = "<thead>{0}</thead>";
        //    var tb = "<tbody>{0}</tbody>";
        //    var tr = "<tr>{0}</tr>";
        //    var thRow = "<th>{0}</th>";
        //    var tdRow = "<td>{0}</td>";
        //    var thCon = "";
        //    var tbCon = "";
        //    var trCon = "";

        //    if (parsedJson) {
        //        var isStringArray = typeof (parsedJson[0]) == "string";
        //        var headers;

        //        // Create table headers from JSON data
        //        // If JSON data is a simple string array we create a single table header
        //        if (isStringArray)
        //            thCon += thRow.format("value");
        //        else {
        //            // If JSON data is an object array, headers are automatically computed
        //            if (typeof (parsedJson[0]) == "object") {
        //                headers = array_keys(parsedJson[0]);

        //                for (i = 0; i < headers.length; i++)
        //                    thCon += thRow.format(headers[i]);
        //            }
        //        }
        //        th = th.format(tr.format(thCon));

        //        // Create table rows from Json data
        //        if (isStringArray) {
        //            for (i = 0; i < parsedJson.length; i++) {
        //                tbCon += tdRow.format(parsedJson[i]);
        //                trCon += tr.format(tbCon);
        //                tbCon = "";
        //            }
        //        }
        //        else {
        //            if (headers) {
        //                var urlRegExp = new RegExp(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
        //                var javascriptRegExp = new RegExp(/(^javascript:[\s\S]*;$)/ig);

        //                for (i = 0; i < parsedJson.length; i++) {
        //                    for (j = 0; j < headers.length; j++) {
        //                        var value = parsedJson[i][headers[j]];
        //                        var isUrl = urlRegExp.test(value) || javascriptRegExp.test(value);

        //                        if (isUrl)   // If value is URL we auto-create a link
        //                            tbCon += tdRow.format(link.format(value));
        //                        else {
        //                            if (value) {
        //                                if (typeof (value) == "object") {
        //                                    //for supporting nested tables
        //                                    tbCon += tdRow.format(ConvertJsonToTable(eval(value.data), value.tableId, value.tableClassName, value.linkText));
        //                                } else {
        //                                    tbCon += tdRow.format(value);
        //                                }
        //                            } else {    // If value == null we format it like PhpMyAdmin NULL values
        //                                tbCon += tdRow.format(italic.format(value).toUpperCase());
        //                            }
        //                        }
        //                    }
        //                    trCon += tr.format(tbCon);
        //                    tbCon = "";
        //                }
        //            }
        //        }
        //        tb = tb.format(trCon);
        //        tbl = tbl.format(th, tb);

        //        return tbl;
        //    }
        //    return null;
        //}

        /**
         * Return just the keys from the input array, optionally only for the specified search_value
         * version: 1109.2015
         *  discuss at: http://phpjs.org/functions/array_keys
         *  +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
         *  +      input by: Brett Zamir (http://brett-zamir.me)
         *  +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
         *  +   improved by: jd
         *  +   improved by: Brett Zamir (http://brett-zamir.me)
         *  +   input by: P
         *  +   bugfixed by: Brett Zamir (http://brett-zamir.me)
         *  *     example 1: array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
         *  *     returns 1: {0: 'firstname', 1: 'surname'}
         */
        //function array_keys(input, search_value, argStrict) {
        //    var search = typeof search_value !== "undefined", tmp_arr = [], strict = !!argStrict, include = true, key = "";

        //    if (input && typeof input === "object" && input.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
        //        return input.keys(search_value, argStrict);
        //    }

        //    for (key in input) {
        //        if (input.hasOwnProperty(key)) {
        //            include = true;
        //            if (search) {
        //                if (strict && input[key] !== search_value)
        //                    include = false;
        //                else if (input[key] != search_value)
        //                    include = false;
        //            }
        //            if (include)
        //                tmp_arr[tmp_arr.length] = key;
        //        }
        //    }
        //    return tmp_arr;
        //}

        

        

        /// other

        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.MakesTable();
        };

        ctrl.MakesTable = function processJson() {
            $("#inner_tbl").html(buildTable(this.documents));
        };

        function buildTable(a) {
            var e = document.createElement("table"), d, b;

            if (isArray(a)) return buildArray(a);

            for (var c in a)
                if (a.hasOwnProperty(c))
                    "object" != typeof a[c] || isArray(a[c])
                        ? "object" == typeof a[c] && isArray(a[c])
                        ? (d = e.insertRow(-1), b = d
                            .insertCell(-1), b.colSpan = 2, b
                            .innerHTML = '<div class="td_head">' +
                            encodeText(c) +
                            '</div><table style="width:100%">' +
                            $(buildArray(a[c]), !1).html() +
                            "</table>")
                        : (d = e.insertRow(-1), b = d
                            .insertCell(-1), b.innerHTML = "<div class='td_head'>" + encodeText(c) + "</div>", d = d
                            .insertCell(-1), d.innerHTML = "<div class='td_row_even'>" +
                            encodeText(a[c]) +
                            "</div>")
                        : (d = e.insertRow(-1), b = d
                            .insertCell(-1), b.colSpan = 2, b
                            .innerHTML = '<div class="td_head">' +
                            encodeText(c) +
                            '</div><table style="width:100%">' +
                            $(buildTable(a[c]), !1).html() +
                            "</table>");
            return e;
        }

        function buildArray(a) {
            var e = document.createElement("table"),
                d, b, c = !1,
                p = !1,
                m = {},
                h = -1,
                n = 0,
                l;
            l = "";
            if (0 === a.length) return "<div></div>";
            d = e.insertRow(-1);
            var f;
            for (f = 0; f < a.length; f++)
                if ("object" != typeof a[f] || isArray(a[f])) "object" == typeof a[f] && isArray(a[f]) ? (b = d.insertCell(h), b.colSpan = 2, b.innerHTML = '<div class="td_head"></div><table style="width:100%">' + $(buildArray(a[f]), !1).html() + "</table>", c = !0) : p || (h += 1, p = !0, b = d.insertCell(h), m.empty = h, b.innerHTML = "<div class='td_head'>&nbsp;</div>");
                else
                    for (var k in a[f]) l =
                        "-" + k, l in m || (c = !0, h += 1, b = d.insertCell(h), m[l] = h, b.innerHTML = "<div class='td_head'>" + encodeText(k) + "</div>");
            c || e.deleteRow(0);
            n = h + 1;
            for (f = 0; f < a.length; f++)
                if (d = e.insertRow(-1), td_class = isEven(f) ? "td_row_even" : "td_row_odd", "object" != typeof a[f] || isArray(a[f]))
                    if ("object" == typeof a[f] && isArray(a[f]))
                        for (h = m.empty, c = 0; c < n; c++) b = d.insertCell(c), b.className = td_class, l = c == h ? '<table style="width:100%">' + $(buildArray(a[f]), !1).html() + "</table>" : " ", b.innerHTML = "<div class='" + td_class + "'>" + encodeText(l) +
                            "</div>";
                    else
                        for (h = m.empty, c = 0; c < n; c++) b = d.insertCell(c), l = c == h ? a[f] : " ", b.className = td_class, b.innerHTML = "<div class='" + td_class + "'>" + encodeText(l) + "</div>";
                else {
                    for (c = 0; c < n; c++) b = d.insertCell(c), b.className = td_class, b.innerHTML = "<div class='" + td_class + "'>&nbsp;</div>";
                    for (k in a[f]) c = a[f], l = "-" + k, h = m[l], b = d.cells[h], b.className = td_class, "object" != typeof c[k] || isArray(c[k]) ? "object" == typeof c[k] && isArray(c[k]) ? b.innerHTML = '<table style="width:100%">' + $(buildArray(c[k]), !1).html() + "</table>" : b.innerHTML =
                        "<div class='" + td_class + "'>" + encodeText(c[k]) + "</div>" : b.innerHTML = '<table style="width:100%">' + $(buildTable(c[k]), !1).html() + "</table>";
                }
            return e;
        }

        function encodeText(a) {
            return $("<div />").text(a).html();
        }

        function isArray(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
        }

        function isEven(a) {
            return 0 === a % 2;
        }

        function buildTree(a, e, d) {
            e += 1;
            if ("undefined" === typeof a) console.log("undef!!", e);
            else
                for (var b in a)
                    if ("object" === typeof a[b]) {
                        var c = addTree(b, d, isArray(a[b]));
                        buildTree(a[b], e, c);
                    } else addLeaf(b, a, d);
        }

        function addTree(a, e, d) {
            var b = "lbl_obj";
            d && (b = "lbl_array");
            var c = "_" + Math.random().toString(36).substr(2, 9);

            d = document.createElement("li");
            d.innerHTML = "<label for='" + c + "' class='" + b + "'>" + encodeText(a) + "</label> <input type='checkbox' checked id='" + c + "' />";
            a = document.createElement("ol");
            d.appendChild(a);

            null != e && e.appendChild(d);
            return a;
        }

        function addLeaf(a, e, d) {
            var b = "";
            isArray(e) || (b = a + ":");
            b += e[a];
            Math.random().toString(36).substr(2, 9);
            a = document.createElement("li");
            a.className = "file";
            a.innerHTML = "<a>" + encodeText(b) + "</a>";
            d.appendChild(a);
        }

        // end other
    }

    module.exports = jsonTableConfig();
})(window.angular)