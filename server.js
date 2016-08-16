var express = require('express');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();

var smtpTransport = nodeMailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "<Login_Email_Address>",
        pass: "<Login_Password>"
    }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3300));
app.use(express.static(__dirname + '/app'));
app.set('views', __dirname + '/app');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', function(req, res){
    res.render('index.html');
});

app.post('/postEmail',function(req,res){
    var data = req.body;
    var mailOptions={
        to : 'hegde.ashwath1@gmail.com',
        subject : 'iamHegdeAshwath - Lets get in touch now!',
        html: '<div style="font-family: cursive; font-size: 14px">' +
                '<span><span style="font-weight: bold">Full Name: </span>' + data.contactName + '</span><br><br>' +
                '<span><span style="font-weight: bold">Contact Email: </span>' + data.contactEmail + '</span><br><br>' +
                '<span><span style="font-weight: bold">Contact Phone: </span>' + data.contactPhone + '</span><br><br>' +
                '<span><span style="font-weight: bold">Message: </span>' + data.contactMessage + '</span>' +
              '</div>'
    };
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            res.end("sent");
            var mailOptions={
                from : 'hegde.ashwath1@gmail.com',
                to: data.contactEmail,
                subject : 'Re: iamHegdeAshwath - Lets get in touch now!',
                html: '<div style="font-family: cursive; font-size: 14px">' +
                        '<span>Thank you for leaving me a message. Your Message is important to me, will contact you at the earliest.</span><br><br>' +
                        '<b>Regards</b>' +
                        '<p>Ashwath Suresh Hegde</p>' +
                      '</div>'
            };
            smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                    res.end("error");
                }else{
                    res.end("sent");
                }
            });
        }
    });
});

app.listen(app.get('port'), function() {
});

console.log('Magic happens on port ' + app.get('port'));
