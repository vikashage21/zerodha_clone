import mongoose from 'mongoose'

export const dbConnect = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URL)

        if (res) {
            console.log(`connect to database `, mongoose.connection.name)
        }
    } catch (error) {
        console.log('failed to connect with database', error.message)
    }

}