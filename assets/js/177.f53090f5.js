(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{734:function(a,e,s){"use strict";s.r(e);var t=s(26),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"thymeleaf-内置对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thymeleaf-内置对象"}},[a._v("#")]),a._v(" Thymeleaf 内置对象")]),a._v(" "),s("h2",{attrs:{id:"dates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dates"}},[a._v("#")]),a._v(" "),s("code",[a._v("#dates")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Dates\n* ======================================================================\n*/\n/*\n* Format date with the standard locale format\n* Also works with arrays, lists or sets\n*/\n${#dates.format(date)}\n${#dates.arrayFormat(datesArray)}\n${#dates.listFormat(datesList)}\n${#dates.setFormat(datesSet)}\n/*\n* Format date with the ISO8601 format\n* Also works with arrays, lists or sets\n*/\n${#dates.formatISO(date)}\n${#dates.arrayFormatISO(datesArray)}\n${#dates.listFormatISO(datesList)}\n${#dates.setFormatISO(datesSet)}\n/*\n* Format date with the specified pattern\n* Also works with arrays, lists or sets\n*/\n${#dates.format(date, 'dd/MMM/yyyy HH:mm')}\n${#dates.arrayFormat(datesArray, 'dd/MMM/yyyy HH:mm')}\n${#dates.listFormat(datesList, 'dd/MMM/yyyy HH:mm')}\n${#dates.setFormat(datesSet, 'dd/MMM/yyyy HH:mm')}\n/*\n* Obtain date properties\n* Also works with arrays, lists or sets\n*/\n${#dates.day(date)} // also arrayDay(...), listDay(...), etc.\n${#dates.month(date)} // also arrayMonth(...), listMonth(...), etc.\n${#dates.monthName(date)} // also arrayMonthName(...), listMonthName(...), etc.\n${#dates.monthNameShort(date)} // also arrayMonthNameShort(...), listMonthNameShort(...), etc.\n${#dates.year(date)} // also arrayYear(...), listYear(...), etc.\n${#dates.dayOfWeek(date)} // also arrayDayOfWeek(...), listDayOfWeek(...), etc.\n${#dates.dayOfWeekName(date)} // also arrayDayOfWeekName(...), listDayOfWeekName(...), etc.\n${#dates.dayOfWeekNameShort(date)} // also arrayDayOfWeekNameShort(...), listDayOfWeekNameShort(...), etc.\n${#dates.hour(date)} // also arrayHour(...), listHour(...), etc.\n${#dates.minute(date)} // also arrayMinute(...), listMinute(...), etc.\n${#dates.second(date)} // also arraySecond(...), listSecond(...), etc.\n${#dates.millisecond(date)} // also arrayMillisecond(...), listMillisecond(...), etc.\n/*\n* Create date (java.util.Date) objects from its components\n*/\n${#dates.create(year,month,day)}\n${#dates.create(year,month,day,hour,minute)}\n${#dates.create(year,month,day,hour,minute,second)}\n${#dates.create(year,month,day,hour,minute,second)}\n${#dates.create(year,month,day,hour,minute,second,millisecond)}\n/*\n* Create a date (java.util.Date) object for the current date and time\n*/\n${#dates.createNow()}\n/*\n* Create a date (java.util.Date) object for the current date (time set to 00:00)\n*/\n${#dates.createToday()}\n")])])]),s("h2",{attrs:{id:"calendars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calendars"}},[a._v("#")]),a._v(" "),s("code",[a._v("#Calendars")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Calendars\n* ======================================================================\n*/\n/*\n* Format calendar with the standard locale format\n* Also works with arrays, lists or sets\n*/\n${#calendars.format(cal)}\n${#calendars.arrayFormat(calArray)}\n${#calendars.listFormat(calList)}\n${#calendars.setFormat(calSet)}\n/*\n* Format calendar with the ISO8601 format\n* Also works with arrays, lists or sets\n*/\n${#calendars.formatISO(cal)}\n${#calendars.arrayFormatISO(calArray)}\n${#calendars.listFormatISO(calList)}\n${#calendars.setFormatISO(calSet)}\n/*\n* Format calendar with the specified pattern\n* Also works with arrays, lists or sets\n*/\n${#calendars.format(cal, 'dd/MMM/yyyy HH:mm')}\n${#calendars.arrayFormat(calArray, 'dd/MMM/yyyy HH:mm')}\n${#calendars.listFormat(calList, 'dd/MMM/yyyy HH:mm')}\n${#calendars.setFormat(calSet, 'dd/MMM/yyyy HH:mm')}\n/*\n* Obtain calendar properties\n* Also works with arrays, lists or sets\n*/\n${#calendars.day(date)} // also arrayDay(...), listDay(...), etc.\n${#calendars.month(date)} // also arrayMonth(...), listMonth(...), etc.\n${#calendars.monthName(date)} // also arrayMonthName(...), listMonthName(...), etc.\n${#calendars.monthNameShort(date)} // also arrayMonthNameShort(...), listMonthNameShort(...), etc.\n${#calendars.year(date)} // also arrayYear(...), listYear(...), etc.\n${#calendars.dayOfWeek(date)} // also arrayDayOfWeek(...), listDayOfWeek(...), etc.\n${#calendars.dayOfWeekName(date)} // also arrayDayOfWeekName(...), listDayOfWeekName(...), etc.\n${#calendars.dayOfWeekNameShort(date)} // also arrayDayOfWeekNameShort(...), listDayOfWeekNameShort(...), etc.\n${#calendars.hour(date)} // also arrayHour(...), listHour(...), etc.\n${#calendars.hour(date)} // also arrayHour(...), listHour(...), etc.\n${#calendars.minute(date)} // also arrayMinute(...), listMinute(...), etc.\n${#calendars.second(date)} // also arraySecond(...), listSecond(...), etc.\n${#calendars.millisecond(date)} // also arrayMillisecond(...), listMillisecond(...), etc.\n/*\n* Create calendar (java.util.Calendar) objects from its components\n*/\n${#calendars.create(year,month,day)}\n${#calendars.create(year,month,day,hour,minute)}\n${#calendars.create(year,month,day,hour,minute,second)}\n${#calendars.create(year,month,day,hour,minute,second,millisecond)}\n/*\n* Create a calendar (java.util.Calendar) object for the current date and time\n*/\n${#calendars.createNow()}\n/*\n* Create a calendar (java.util.Calendar) object for the current date (time set to 00:00)\n*/\n${#calendars.createToday()}\n")])])]),s("h2",{attrs:{id:"numbers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numbers"}},[a._v("#")]),a._v(" "),s("code",[a._v("#numbers")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Numbers\n* ======================================================================\n*/\n/*\n* ==========================\n* Formatting integer numbers\n* ==========================\n*/\n/*\n* Set minimum integer digits.\n* Also works with arrays, lists or sets\n*/\n${#numbers.formatInteger(num,3)}\n${#numbers.arrayFormatInteger(numArray,3)}\n${#numbers.listFormatInteger(numList,3)}\n${#numbers.setFormatInteger(numSet,3)}\n/*\n* Set minimum integer digits and thousands separator:\n* 'POINT', 'COMMA', 'WHITESPACE', 'NONE' or 'DEFAULT' (by locale).\n* Also works with arrays, lists or sets\n*/\n${#numbers.formatInteger(num,3,'POINT')}\n${#numbers.arrayFormatInteger(numArray,3,'POINT')}\n${#numbers.listFormatInteger(numList,3,'POINT')}\n${#numbers.setFormatInteger(numSet,3,'POINT')}\n/*\n* ==========================\n* Formatting decimal numbers\n* ==========================\n*/\n/*\n* Set minimum integer digits and (exact) decimal digits.\n* Also works with arrays, lists or sets\n*/\n${#numbers.formatDecimal(num,3,2)}\n${#numbers.arrayFormatDecimal(numArray,3,2)}\n${#numbers.listFormatDecimal(numList,3,2)}\n${#numbers.setFormatDecimal(numSet,3,2)}\n/*\n* Set minimum integer digits and (exact) decimal digits, and also decimal separator.\n* Also works with arrays, lists or sets\n*/\n${#numbers.formatDecimal(num,3,2,'COMMA')}\n${#numbers.arrayFormatDecimal(numArray,3,2,'COMMA')}\n${#numbers.listFormatDecimal(numList,3,2,'COMMA')}\n${#numbers.setFormatDecimal(numSet,3,2,'COMMA')}\n/*\n* Set minimum integer digits and (exact) decimal digits, and also thousands and\n* decimal separator.\n* Also works with arrays, lists or sets\n*/\n${#numbers.formatDecimal(num,3,'POINT',2,'COMMA')}\n${#numbers.arrayFormatDecimal(numArray,3,'POINT',2,'COMMA')}\n${#numbers.listFormatDecimal(numList,3,'POINT',2,'COMMA')}\n${#numbers.setFormatDecimal(numSet,3,'POINT',2,'COMMA')}\n/*\n* ==========================\n* Utility methods\n* ==========================\n*/\n/*\n* Create a sequence (array) of integer numbers going\n* from x to y\n*/\n${#numbers.sequence(from,to)}\n${#numbers.sequence(from,to,step)}\n")])])]),s("h2",{attrs:{id:"strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[a._v("#")]),a._v(" "),s("code",[a._v("#strings")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Strings\n* ======================================================================\n*/\n/*\n* Null-safe toString()\n*/\n${#strings.toString(obj)} // also array*, list* and set*\n/*\n* Check whether a String is empty (or null). Performs a trim() operation before check\n* Also works with arrays, lists or sets\n* * Also works with arrays, lists or sets\n*/\n${#strings.isEmpty(name)}\n${#strings.arrayIsEmpty(nameArr)}\n${#strings.listIsEmpty(nameList)}\n${#strings.setIsEmpty(nameSet)}\n/*\n* Perform an 'isEmpty()' check on a string and return it if false, defaulting to\n* another specified string if true.\n* Also works with arrays, lists or sets\n*/\n${#strings.defaultString(text,default)}\n${#strings.arrayDefaultString(textArr,default)}\n${#strings.listDefaultString(textList,default)}\n${#strings.setDefaultString(textSet,default)}\n/*\n* Check whether a fragment is contained in a String\n* Also works with arrays, lists or sets\n*/\n${#strings.contains(name,'ez')} // also array*, list* and set*\n${#strings.containsIgnoreCase(name,'ez')} // also array*, list* and set*\n/*\n* Check whether a String starts or ends with a fragment\n* Also works with arrays, lists or sets\n*/\n${#strings.startsWith(name,'Don')} // also array*, list* and set*\n${#strings.endsWith(name,endingFragment)} // also array*, list* and set*\n/*\n* Substring-related operations\n* Also works with arrays, lists or sets\n*/\n${#strings.indexOf(name,frag)} // also array*, list* and set*\n${#strings.substring(name,3,5)} // also array*, list* and set*\n${#strings.substringAfter(name,prefix)} // also array*, list* and set*\n${#strings.substringBefore(name,suffix)} // also array*, list* and set*\n${#strings.replace(name,'las','ler')} // also array*, list* and set*\n/*\n* Append and prepend\n* Also works with arrays, lists or sets\n*/\n${#strings.prepend(str,prefix)} // also array*, list* and set*\n${#strings.append(str,suffix)} // also array*, list* and set*\n/*\n* Change case\n* Also works with arrays, lists or sets\n*/\n${#strings.toUpperCase(name)} // also array*, list* and set*\n${#strings.toLowerCase(name)} // also array*, list* and set*\n/*\n* Split and join\n*/\n${#strings.arrayJoin(namesArray,',')}\n${#strings.listJoin(namesList,',')}\n${#strings.setJoin(namesSet,',')}\n${#strings.arraySplit(namesStr,',')} // returns String[]\n${#strings.listSplit(namesStr,',')} // returns List<String>\n${#strings.setSplit(namesStr,',')} // returns Set<String>\n/*\n* Trim\n* Also works with arrays, lists or sets\n*/\n${#strings.trim(str)} // also array*, list* and set*\n/*\n* Compute length\n* Also works with arrays, lists or sets\n*/\n${#strings.length(str)} // also array*, list* and set*\n/*\n* Abbreviate text making it have a maximum size of n. If text is bigger, it\n* will be clipped and finished in \"...\"\n* Also works with arrays, lists or sets\n*/\n${#strings.abbreviate(str,10)} // also array*, list* and set*\n/*\n* Convert the first character to upper-case (and vice-versa)\n*/\n${#strings.capitalize(str)} // also array*, list* and set*\n${#strings.unCapitalize(str)} // also array*, list* and set*\n/*\n* Convert the first character of every word to upper-case\n*/\n${#strings.capitalizeWords(str)} // also array*, list* and set*\n${#strings.capitalizeWords(str,delimiters)} // also array*, list* and set*\n/*\n* Escape the string\n*/\n${#strings.escapeXml(str)} // also array*, list* and set*\n${#strings.escapeJava(str)} // also array*, list* and set*\n${#strings.escapeJavaScript(str)} // also array*, list* and set*\n${#strings.unescapeJava(str)} // also array*, list* and set*\n${#strings.unescapeJavaScript(str)} // also array*, list* and set*\n/*\n* Null-safe comparison and concatenation\n*/\n${#strings.equals(first, second)}\n${#strings.equalsIgnoreCase(first, second)}\n${#strings.concat(values...)}\n${#strings.concatReplaceNulls(nullValue, values...)}\n/*\n* Random\n*/\n${#strings.randomAlphanumeric(count)}\n")])])]),s("h2",{attrs:{id:"objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[a._v("#")]),a._v(" "),s("code",[a._v("#objects")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Objects\n* ======================================================================\n*/\n/*\n* Return obj if it is not null, and default otherwise\n* Also works with arrays, lists or sets\n*/\n${#objects.nullSafe(obj,default)}\n${#objects.arrayNullSafe(objArray,default)}\n${#objects.listNullSafe(objList,default)}\n${#objects.setNullSafe(objSet,default)}\n")])])]),s("h2",{attrs:{id:"bools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bools"}},[a._v("#")]),a._v(" "),s("code",[a._v("#bools")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Bools\n* ======================================================================\n*/\n/*\n* Evaluate a condition in the same way that it would be evaluated in a th:if tag\n* (see conditional evaluation chapter afterwards).\n* Also works with arrays, lists or sets\n*/\n${#bools.isTrue(obj)}\n${#bools.arrayIsTrue(objArray)}\n${#bools.listIsTrue(objList)}\n${#bools.setIsTrue(objSet)}\n/*\n* Evaluate with negation\n* Also works with arrays, lists or sets\n*/\n${#bools.isFalse(cond)}\n${#bools.arrayIsFalse(condArray)}\n${#bools.listIsFalse(condList)}\n${#bools.setIsFalse(condSet)}\n/*\n* Evaluate and apply AND operator\n* Receive an array, a list or a set as parameter\n*/\n${#bools.arrayAnd(condArray)}\n${#bools.listAnd(condList)}\n${#bools.setAnd(condSet)}\n/*\n* Evaluate and apply OR operator\n* Receive an array, a list or a set as parameter\n*/\n${#bools.arrayOr(condArray)}\n${#bools.listOr(condList)}\n${#bools.setOr(condSet)}\n")])])]),s("h2",{attrs:{id:"arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrays"}},[a._v("#")]),a._v(" "),s("code",[a._v("#arrays")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Arrays\n* ======================================================================\n*/\n/*\n* Converts to array, trying to infer array component class.\n* Note that if resulting array is empty, or if the elements\n* of the target object are not all of the same class,\n* this method will return Object[].\n*/\n${#arrays.toArray(object)}\n/*\n* Convert to arrays of the specified component class.\n*/\n${#arrays.toStringArray(object)}\n${#arrays.toIntegerArray(object)}\n${#arrays.toLongArray(object)}\n${#arrays.toDoubleArray(object)}\n${#arrays.toFloatArray(object)}\n${#arrays.toBooleanArray(object)}\n/*\n* Compute length\n*/\n${#arrays.length(array)}\n/*\n* Check whether array is empty\n*/\n${#arrays.isEmpty(array)}\n/*\n* Check if element or elements are contained in array\n*/\n${#arrays.contains(array, element)}\n${#arrays.containsAll(array, elements)}\n")])])]),s("h2",{attrs:{id:"lists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lists"}},[a._v("#")]),a._v(" "),s("code",[a._v("#lists")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Lists\n* ======================================================================\n*/\n/*\n* Converts to list\n*/\n${#lists.toList(object)}\n/*\n* Compute size\n*/\n${#lists.size(list)}\n/*\n* Check whether list is empty\n*/\n${#lists.isEmpty(list)}\n/*\n* Check if element or elements are contained in list\n*/\n${#lists.contains(list, element)}\n${#lists.containsAll(list, elements)}\n/*\n* Sort a copy of the given list. The members of the list must implement\n* comparable or you must define a comparator.\n*/\n${#lists.sort(list)}\n${#lists.sort(list, comparator)}\n")])])]),s("h2",{attrs:{id:"sets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sets"}},[a._v("#")]),a._v(" "),s("code",[a._v("#sets")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Sets\n* ======================================================================\n*/\n/*\n* Converts to set\n*/\n${#sets.toSet(object)}\n/*\n* Compute size\n*/\n${#sets.size(set)}\n/*\n* Check whether set is empty\n*/\n${#sets.isEmpty(set)}\n/*\n* Check if element or elements are contained in set\n*/\n${#sets.contains(set, element)}\n${#sets.containsAll(set, elements)}\n")])])]),s("h2",{attrs:{id:"maps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maps"}},[a._v("#")]),a._v(" "),s("code",[a._v("#maps")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Maps\n* ======================================================================\n*/\n/*\n* Compute size\n*/\n${#maps.size(map)}\n/*\n* Check whether map is empty\n*/\n${#maps.isEmpty(map)}\n/*\n* Check if key/s or value/s are contained in maps\n*/\n${#maps.containsKey(map, key)}\n${#maps.containsAllKeys(map, keys)}\n${#maps.containsValue(map, value)}\n${#maps.containsAllValues(map, value)}\n")])])]),s("h2",{attrs:{id:"aggregates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aggregates"}},[a._v("#")]),a._v(" "),s("code",[a._v("#aggregates")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Aggregates\n* ======================================================================\n*/\n/*\n* Compute sum. Returns null if array or collection is empty\n*/\n${#aggregates.sum(array)}\n${#aggregates.sum(collection)}\n/*\n* Compute average. Returns null if array or collection is empty\n*/\n${#aggregates.avg(array)}\n${#aggregates.avg(collection)}\n")])])]),s("h2",{attrs:{id:"messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[a._v("#")]),a._v(" "),s("code",[a._v("#messages")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Messages\n* ======================================================================\n*/\n/*\n* Obtain externalized messages. Can receive a single key, a key plus arguments,\n* or an array/list/set of keys (in which case it will return an array/list/set of\n* externalized messages).\n* If a message is not found, a default message (like '??msgKey??') is returned.\n*/\n${#messages.msg('msgKey')}\n${#messages.msg('msgKey', param1)}\n${#messages.msg('msgKey', param1, param2)}\n${#messages.msg('msgKey', param1, param2, param3)}\n${#messages.msgWithParams('msgKey', new Object[] {param1, param2, param3, param4})}\n${#messages.arrayMsg(messageKeyArray)}\n${#messages.listMsg(messageKeyList)}\n${#messages.setMsg(messageKeySet)}\n/*\n* Obtain externalized messages or null. Null is returned instead of a default\n* message if a message for the specified key is not found.\n*/\n${#messages.msgOrNull('msgKey')}\n${#messages.msgOrNull('msgKey', param1)}\n${#messages.msgOrNull('msgKey', param1, param2)}\n${#messages.msgOrNull('msgKey', param1, param2, param3)}\n${#messages.msgOrNullWithParams('msgKey', new Object[] {param1, param2, param3, param4})}\n${#messages.arrayMsgOrNull(messageKeyArray)}\n${#messages.listMsgOrNull(messageKeyList)}\n${#messages.setMsgOrNull(messageKeySet)}\n")])])]),s("h2",{attrs:{id:"ids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ids"}},[a._v("#")]),a._v(" "),s("code",[a._v("#ids")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('/*\n* ======================================================================\n* See javadoc API for class org.thymeleaf.expression.Ids\n* ======================================================================\n*/\n/*\n* Normally used in th:id attributes, for appending a counter to the id attribute value\n* so that it remains unique even when involved in an iteration process.\n*/\n${#ids.seq(\'someId\')}\n/*\n* Normally used in th:for attributes in <label> tags, so that these labels can refer to Ids\n* generated by means if the #ids.seq(...) function.\n*\n* Depending on whether the <label> goes before or after the element with the #ids.seq(...)\n* function, the "next" (label goes before "seq") or the "prev" function (label goes after\n* "seq") function should be called.\n*/\n${#ids.next(\'someId\')}\n${#ids.prev(\'someId\')}\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);