const nodemailer = require("nodemailer");

function generateOrderEmail({ order, total })
{
  return `
    <div>
      <h1>Thank you for doing business with Block18!</h1>
      <h4>We have recieved your order, and will be ready in 20 min!</h4>
      <p>Your total is ${total}</p>
      <ul>
        ${order.map(item => `<li>
          <img src="${item.thumbnail}"  alt="${item.name}"/>
           <strong>[${item.name}]</strong> - ${item.price}
        </li>`).join('')}
      </ul>
      <p>🍔 Don't knock it until you lick it 🍔</p>
      <p> 🍔 - Some random food genius 🍔 </p>
      <style>
          ul {
            list-style: none;
          }
      </style>
    </div>
  `;
}


const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: 587,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

function wait (ms = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

exports.handler = async (event, context) => {
    await wait(3000);

    const body = JSON.parse(event.body)

    const requiredFields = ['email', 'name', 'order'];

    for(const field of requiredFields)
    {
        if(!body[field])
        {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: `Looks like one of the field is missing, go fill out your ${field}!` })
            }
        }
    }


    if(!body.order.length)
    {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: `Why would you buy nothing?!` })
        }
    }

    const info = await transporter.sendMail({
        from: "Block18 <block18@example.com>",
        to: `${body.name} <${body.email}>`,
        subject: "New Order!",
        html: generateOrderEmail({ order: body.order, total: body.total })
    })
    console.log(info);
    return {
      statusCode: 200,
      body: JSON.stringify({status: 'Success'}),
    };
}



/*

exports.handler = async (event, context) => {
	const info = await transporter.sendMail({
		from: "Block18 <block18@example.com>",
		to: "order@example.com",
		subject: "New order",
		html: `<p>New order is here</p>`,
	});

	console.log(info);
	return {
		statusCode: 200,
		body: JSON.stringify(info),
	};
};


*/