import os
import re

filepath = 'src/components/layout/Footer.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the state and handleSubmit logic
old_logic_pattern = re.compile(r"  const \[email, setEmail\] = useState\(''\);\s*const handleSubmit = \(e: React\.FormEvent\) => \{\s*e\.preventDefault\(\);\s*if \(email\) \{\s*alert\(Subscribed with \$\{email\}\);\s*setEmail\(''\);\s*\}\s*\};", re.MULTILINE)

new_logic = '''  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    try {
      const endpoint = 'https://formspree.io/f/newsletter_bgcc';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: email, _subject: 'New Newsletter Subscription' }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };'''

content = old_logic_pattern.sub(new_logic, content)

# 2. Update the form UI
old_form_pattern = re.compile(r'<form onSubmit=\{handleSubmit\} className="flex flex-col gap-4">.*?<\/form>', re.DOTALL)

new_form = '''<form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-sm mb-2 text-left">
                Thank you! You\\'ve been subscribed to our newsletter.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-sm mb-2 text-left">
                Oops! Something went wrong. Please try again.
              </div>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              required
              disabled={status === 'submitting'}
              className="w-full bg-black/80 border border-white/10 px-6 py-4 text-base text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#BF8440] transition-colors rounded-sm disabled:opacity-50"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[#BF8440] text-black font-semibold uppercase tracking-[0.2em] py-4 hover:bg-[#d49852] transition-colors rounded-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Submit'}
            </button>
          </form>'''

content = old_form_pattern.sub(new_form, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
