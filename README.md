"# NEXT-Assignment-1" 
##BLOG POSTS

###What are some differences between interfaces and types in TypeScript?
TypeScript শেখার সময় অনেকেই interface আর type নিয়ে কনফিউশনে পড়ে যায়। যদিও দু’টোকেই টাইপ Define করতে ব্যবহার করা হয়, তবুও এদের মধ্যে কিছু ছোটখাটো পার্থক্য আছে। কেউ একেবারে ধাপে ধাপে বুঝে ওঠে না।

interface মূলত object এর structure বা গঠন নির্ধারণ করতে ব্যবহৃত হয়। ধরো একটা object এর name হবে string এবং age হবে number। কিন্তু type alias একটু বেশি flexible — এটি শুধু object নয়, primitive, union, tuple — সব ধরনের ডেটা নিয়ে কাজ করতে পারে।

interface কে একাধিকবার declare করলে typescript নিজেই তা merge করে; কিন্তু type aliasকে সরাসরি merge করা যায় না। তবে intersection ব্যবহার করে combine করা যায়।

আরও একটি গুরুত্বপূর্ণ বিষয় হলো — interface class দ্বারা implement করা যায়, অর্থাৎ class ঠিক সেই structure অনুসরণ করবে। type alias এর ক্ষেত্রে সরাসরি implementation করা যায় না।



###Explain the difference between any, unknown, and never types in TypeScript.
TypeScript শেখার সময় নতুনদের অনেককে any, unknown আর never টাইপ নিয়ে বিভ্রান্তিতে পড়তে দেখা যায়। এদের প্রতিটির কাজ আলাদা এবং ব্যবহার করার নিয়মও আলাদা।

any হলো সবচেয়ে relaxed টাইপ। এতে যেকোনো ধরনের value রাখা যায় এবং TypeScript কোনো type-checking করে না। এর প্রধান সুবিধা হলো দ্রুত কোড লেখা যায়, কিন্তু নিরাপত্তা কমে যায়। ভুল value assign করলেও compiler কিছু বলে না।

unknown একটু বেশি সতর্ক ধরনের। এটিতেও যেকোনো value assign করা যায়, কিন্তু value ব্যবহার করার আগে type check বা validation করা বাধ্যতামূলক। অর্থাৎ নিরাপত্তা any এর চেয়ে বেশি এবং ভুল করার সুযোগ কম।

never হলো এমন টাইপ যা কখনো কোনো value ধারণ করতে পারে না। এটি সাধারণত সেই function বা block এ ব্যবহার হয় যা কখনো normal execution এ পৌঁছায় না, যেমন error throw করা বা infinite loop। সংক্ষেপে, any হলো relaxed, unknown হলো safe, আর never হলো এমন জায়গা যেখানে কোনো value কখনো আসবে না।

শেষ কথা, any সবকিছুকে অনুমতি দেয়, unknown আগে অনুমতি চাইবে, আর never কোনো value আসতেই দেবে না।