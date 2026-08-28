import os

filepath = 'src/components/home/LeadershipPyramid.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

import re

# We need to replace the entire renderLeaderCard function
old_func_pattern = r"const renderLeaderCard = \(leader: Coordinator, isApex = false\) => \{.*?\n  \};\n"
old_func_match = re.search(old_func_pattern, content, re.DOTALL)

new_func = """const renderLeaderCard = (leader: Coordinator, isApex = false) => {
    const hasError = imageErrors[leader.id];
    const initials = leader.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2);

    return (
      <div
        key={leader.id}
        className={`glass-card rounded-2xl p-6 sm:p-8 hover:border-[#BF8440]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group shadow-xl relative overflow-hidden ${
          isApex ? 'max-w-sm mx-auto w-full' : 'w-full'
        }`}
      >
        {/* Subtle Ambient Gold Hue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#BF8440]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#BF8440]/20 transition-colors" />

        {/* Circular Portrait Container */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-[#BF8440]/60 transition-colors shadow-2xl shrink-0 z-10 bg-[#121212]">
          {!hasError ? (
            <Image
              src={leader.photo || leader.photoUrl || ''}
              alt={`${leader.name} portrait`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              onError={() => handleImageError(leader.id)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#181818] text-[#BF8440]">
              <User className="w-12 h-12 mb-2 opacity-60" />
              <span className="text-xl font-bold font-serif">{initials}</span>
            </div>
          )}
        </div>

        {/* Name & Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#e2e8f0] group-hover:text-white transition-colors leading-snug mb-1 z-10">
          {leader.name}
        </h3>

        <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#BF8440] font-sans mb-6 z-10">
          {leader.role}
        </div>

        {/* LinkedIn Outbound Action */}
        <div className="mt-auto w-full pt-5 border-t border-white/5 flex items-center justify-center z-10">
          <a
            href={leader.linkedin || leader.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181818] border border-white/10 hover:border-[#0077B5] hover:bg-[#0077B5]/10 text-sm font-medium text-[#e2e8f0] hover:text-[#0077B5] transition-all"
            aria-label={`${leader.name} LinkedIn profile`}
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-60" />
          </a>
        </div>
      </div>
    );
  };
"""

if old_func_match:
    content = content[:old_func_match.start()] + new_func + content[old_func_match.end():]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Replaced renderLeaderCard successfully.")
else:
    print("Could not find renderLeaderCard to replace.")
