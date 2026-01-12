<?php
session_start();
session_unset();
session_destroy();
header('Location: ../CVA-Bulletin/login.html');
exit;
