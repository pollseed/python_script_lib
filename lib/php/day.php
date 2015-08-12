<?php
const FORMAT = "Y-m-d";
function getAddDays($days) {
    return date(FORMAT, strtotime("+".$days." days", strtotime(date(FORMAT))));
}
echo getAddDays(10);
?>
