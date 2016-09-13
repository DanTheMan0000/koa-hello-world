import Koa from 'koa';
import Router from 'koa-router';
import serveStatic from 'koa-serve-static';

const app = new Koa();
const router = Router();


router.get('/john-doe', (ctx , next) => {
  ctx.body = {name: 'John Doe', id: 20};
  ctx.type = 'json';
});
//router.get('/', (ctx , next) => {
  //ctx.body = "Hello World";
  //ctx.type = 'html';
//});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(serveStatic('./public', {fallthrough: false}));

app.listen(8000, () => {console.log('Server listening on http://127.0.0.1:8000' );});
