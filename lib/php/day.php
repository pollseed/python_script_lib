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
?>
