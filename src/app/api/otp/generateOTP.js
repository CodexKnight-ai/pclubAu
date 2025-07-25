import crypto from "crypto";
import redis from "../lib/redis";
import transporter from "../lib/nodemailer";

const generateOTP = async (email) => {
	const otp = crypto.randomInt(100000, 999999).toString();

	await redis.setex(email, 300, otp);

	await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to: email,
		subject: "PClub verification",
		text: `Your otp is ${otp}. It will expire in 5 minutes.`,
	});
	return true;
};

export default generateOTP;
