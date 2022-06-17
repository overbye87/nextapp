import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

const middleware = (req: NextRequest) => {
  const { pathname, href } = req.nextUrl;
  // eslint-disable-next-line no-console
  console.log('_middleware', req.cookies);
  // if (pathname === '/signin') {
  // }
  return NextResponse.next();
  // return NextResponse.redirect('http://localhost:3000/signin');
};

export default middleware;
