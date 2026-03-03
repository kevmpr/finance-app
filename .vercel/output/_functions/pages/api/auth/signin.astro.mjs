import { s as supabase } from '../../../chunks/supabase_BWi3Rcbw.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const provider = formData.get("provider")?.toString();
  const validProviders = ["google", "github"];
  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${request.headers.get("origin")}/api/auth/callback`
      }
    });
    if (error) {
      return new Response(error.message, { status: 500 });
    }
    return redirect(data.url);
  }
  return new Response("Provider is required", { status: 400 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
