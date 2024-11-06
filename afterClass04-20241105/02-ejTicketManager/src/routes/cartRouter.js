import { Router } from 'express';
import { addProductToCart, createCart, getCartById, purchaseCart } from '../controller/CartController.js';
import passport from 'passport';
export const router=Router()

router.post('/', createCart)
router.get('/:cid', getCartById)
router.post("/:cid/product/:pid", passport.authenticate("current", {session:false}), addProductToCart)
router.post("/:cid/purchase", passport.authenticate("current", {session:false}), purchaseCart)