<?php
const FORMAT = "Y-m-d";
function getAddDays($days) {
    return date(FORMAT, strtotime("+".$days." days", strtotime(date(FORMAT))));
}
function getAddMonth($month) {
    return date(FORMAT, strtotime("+".$month." month", strtotime(date(FORMAT))));
}
function getAddYear($year) {
    return date(FORMAT, strtotime("+".$year." year", strtotime(date(FORMAT))));
}
echo getAddDays(10)."\n";
echo getAddMonth(1)."\n";
echo getAddYear(1);

/**
 * 指定した配列を指定した引数で文字結合します.
 * @param $arr 配列
 * @param $arg 引数
 * @param $exclude default="strlent"
 * @return 結合した文字列
 **/
function implodeFilter($arr, $arg, $exclude = "strlen") {
    return implode($arg, array_values(array_filter($arr, $exclude)));       
}
echo implodeFilter(array("hoge","","fuga",null,"piyo",null),"-"));
?>
