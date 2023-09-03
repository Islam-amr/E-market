import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config';
import { UserDataSource } from '../services/user.service';
import { User } from '../entities/User.entity';

export default async (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers.authorization

    if (!headerToken) {
        return res.status(401).json({ message: 'Token missing' });
    }

    const token = await jwt.verify(headerToken, config.JWT_PRIVATE_KEY as string)

    if (!token) {
        return res.status(403).json({ message: 'Invalid token' });
    }

    const user = await UserDataSource.findOneBy({ id: (token as JwtPayload).id })
    console.log(user)
    if (user) {
        req.user = user
    }
    next()
}
