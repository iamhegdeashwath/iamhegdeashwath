var express = require('express');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();

var smtpTransport = nodeMailer.createTransport("SMTP",{
    host: 'smtp.1and1.com',
    secureConnection: true,
    port: 465,
    auth: {
        user: "<Username>",
        pass: "<Password>"
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
        from: data.contactEmail,
        to : 'ashwath.sureshhegde@iamhegdeashwath.com',
        subject : 'iamHegdeAshwath - Lets get in touch now!',
        html: '<div style="font-size: 14px">' +
                '<span><span style="font-weight: bold">Full Name: </span>' + data.contactName + '</span><br><br>' +
                '<span><span style="font-weight: bold">Contact Email: </span>' + data.contactEmail + '</span><br><br>' +
                '<span><span style="font-weight: bold">Contact Phone: </span>' + data.contactPhone + '</span><br><br>' +
                '<span><span style="font-weight: bold">Message: </span>' + data.contactMessage + '</span>' +
              '</div>'
    };
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log("1st" + error);
            res.end("error");
        }else{
            res.end("sent");
            var mailOptions={
                from : 'ashwath.sureshhegde@iamhegdeashwath.com',
                to: data.contactEmail,
                subject : 'Re: iamHegdeAshwath - Lets get in touch now!',
                html: '<div style="font-size: 14px">' +
                        '<span>Thank you for leaving me a message. Your Message is important to me, will contact you at the earliest.</span><br><br>' +
                        '<b style="color: rgb(11, 83, 148);">Regards</b><br>' +
                        '<b style="color: black">Ashwath Suresh Hegde</b><br>' +
                        '<a href="http://iamhegdeashwath.com" target="_blank"><b>http://iamhegdeashwath.com</b></a><br>' +
                        '<span>Phone: +1 (312) 972 - 9557</span>' +
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
