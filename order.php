<?php require( dirname(__FILE__) .'/send_lead.php') ?>
<!DOCTYPE html>
<html>
<head>
    <title>تم قبول طلبك</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="nofollow" />
    <link rel="stylesheet" type="text/css" href="style.css" media="all">
    <style>
        body { margin-top: 50px }
    </style>
</head>

<body>
<script>
var matches = document.cookie.match(new RegExp("(?:^|; )" + 'fb_pixel' + "=([^;]*)"));
var fb_pixel = matches ? decodeURIComponent(matches[1]) : undefined;
</script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '<?php echo htmlspecialchars($_COOKIE['fb_pixel'], ENT_QUOTES, 'UTF-8'); ?>');
fbq('track', 'Lead');
</script><!-- End Facebook Pixel Code -->
<?php if($obj->id) { ?>
    <h1>تم قبول طلبك</h1>

    <p>
        شكرا لطلبك! <br>
        سوف يتصل بك موظفنا في أقرب وقت ممكن. من فضلك، قم بتشغيل هاتفك.
    </p>

    <table style="margin: auto">

        <tr>
            <th>طلب №</th>
            <td><?= $obj->id ?></td>
        </tr>


        <tr>
            <th>الاسم</th>
            <td><?= @$data_post['name']; ?></td>
        </tr>


        <tr>
            <th>رقم التليفون</th>
            <td><?= @$data_post['phone']; ?></td>
        </tr>


    </table>

<?php }
else {
    echo 'Ошибка!';
}
?>

</body>
</html>