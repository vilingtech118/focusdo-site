/* FocusDo site — language, screenshots, contact, reveal.
   Contact lives in ONE place: set CONTACT.email once the support address exists
   and every page switches from the GitHub fallback to a mailto link. */

const CONTACT = {
  email: "vilingtech@gmail.com",
  fallback: "https://github.com/vilingtech118/focusdo-site/issues/new",
};

const LANGS = ["en", "fr", "zh-Hans"];

const T = {
  en: {
    "nav.changelog": "What's new", "cl.eyebrow": "What's new", "cl.title": "Release <em>notes</em>", "cl.lede": "Every version of FocusDo, newest first.",
    "nav.features": "Features", "nav.privacy": "Privacy", "nav.support": "Support",
    "hero.eyebrow": "Eisenhower matrix · for iPhone",
    "hero.title": "Do what <em>matters</em>.<br>Drop the rest.",
    "hero.lede": "FocusDo sorts every task into four boxes — urgent, important, both, or neither — so the next right thing is always obvious.",
    "cta.soon": "Coming soon", "cta.store": "on the App Store", "cta.how": "See how it works",
    "axis.urgent": "Urgent →", "axis.important": "Important →",
    "q.do": "Do now", "q.schedule": "Schedule", "q.delegate": "Delegate", "q.eliminate": "Eliminate",
    "t1": "Send the Q4 report", "t2": "Call the client back", "t3": "Plan the summer trip", "t4": "Read “Deep Work”",
    "t5": "Order office supplies", "t6": "Reply to the poll", "t7": "Sort old photos", "t8": "Unsubscribe from spam",
    "how.eyebrow": "How it works",
    "how.title": "Four boxes.<br><em>One</em> decision.",
    "how.s1.t": "Do now", "how.s1.p": "Urgent and important. Your day starts here.",
    "how.s2.t": "Schedule", "how.s2.p": "Important, not urgent. Where real progress hides — give it a date.",
    "how.s3.t": "Delegate", "how.s3.p": "Urgent, not important. Hand it off, or batch it.",
    "how.s4.t": "Eliminate", "how.s4.p": "Neither. Let it go without guilt.",
    "feat.eyebrow": "Everything you need, nothing you don't",
    "feat.title": "Built for focus, <em>not</em> for busywork.",
    "feat.lede": "A calm, native iPhone app — no account, no clutter, just your priorities.",
    "f.focus.t": "A focus timer on your Lock Screen",
    "f.focus.p": "Start a Pomodoro from any task. The countdown follows you in the Dynamic Island and on the Lock Screen — work, short break, long break, all adjustable.",
    "f.focus.task": "Prepare Monday’s pitch", "f.focus.phase": "Focus",
    "f.widget.t": "Today, on your Home Screen", "f.widget.p": "A widget keeps your “Do now” list one glance away.",
    "f.cal.t": "A calendar that thinks ahead", "f.cal.p": "Due dates, reminders and recurring tasks — daily, weekly, monthly, yearly — laid out by day.",
    "f.stats.t": "See your week", "f.stats.p": "Tasks done, streaks, and where your time actually went.",
    "f.sync.t": "Synced through your iCloud", "f.sync.p": "Your tasks follow you across devices, stored in your own private iCloud — never on our servers.",
    "f.gesture.t": "Fast, native gestures", "f.gesture.p": "Swipe to complete, snooze or delete. Long-press to duplicate. Undo in a tap.",
    "f.duo.t": "Ready for foldables", "f.duo.p": "On a large inner display, the whole matrix sits beside your list, split right on the fold.",
    "f.lang.t": "Speaks your language", "f.lang.p": "English, Français, 简体中文 — and a beautiful dark mode.",
    "gal.eyebrow": "A closer look", "gal.title": "Calm by <em>design</em>.",
    "gal.matrix": "The matrix", "gal.list": "Every task, searchable", "gal.calendar": "Calendar", "gal.stats": "Your week in numbers", "gal.dark": "Dark mode",
    "pledge.title": "Your tasks are <em>yours</em>.",
    "pledge.p": "FocusDo has no account and no server. Your data lives on your iPhone and in your private iCloud — we can't see it, and we don't want to.",
    "pledge.l1": "No account to create", "pledge.l2": "No tracking, no analytics", "pledge.l3": "No ads, ever", "pledge.l4": "Export your data anytime",
    "pledge.link": "Read the privacy policy",
    "final.title": "Clear head.<br><em>Clear</em> list.",
    "final.lede": "FocusDo is coming to the App Store. Free to download.",
    "foot.rights": "© 2026 VilingTech. Made with care.",
    "contact.mail": "Email us", "contact.issue": "Contact us",
    "doc.updated": "Last updated: 18 November 2026",
  },
  fr: {
    "nav.changelog": "Nouveautés", "cl.eyebrow": "Nouveautés", "cl.title": "Notes de <em>version</em>", "cl.lede": "Toutes les versions de FocusDo, de la plus récente à la plus ancienne.",
    "nav.features": "Fonctionnalités", "nav.privacy": "Confidentialité", "nav.support": "Aide",
    "hero.eyebrow": "Matrice d’Eisenhower · pour iPhone",
    "hero.title": "Fais ce qui <em>compte</em>.<br>Oublie le reste.",
    "hero.lede": "FocusDo range chaque tâche dans quatre cases — urgent, important, les deux, ou aucun — pour que la prochaine bonne chose à faire soit toujours évidente.",
    "cta.soon": "Bientôt", "cta.store": "sur l’App Store", "cta.how": "Comment ça marche",
    "axis.urgent": "Urgent →", "axis.important": "Important →",
    "q.do": "Faire", "q.schedule": "Planifier", "q.delegate": "Déléguer", "q.eliminate": "Éliminer",
    "t1": "Envoyer le rapport T4", "t2": "Rappeler le client", "t3": "Organiser les vacances", "t4": "Lire « Deep Work »",
    "t5": "Commander les fournitures", "t6": "Répondre au sondage", "t7": "Trier les vieilles photos", "t8": "Se désabonner des spams",
    "how.eyebrow": "Comment ça marche",
    "how.title": "Quatre cases.<br><em>Une</em> décision.",
    "how.s1.t": "Faire", "how.s1.p": "Urgent et important. Ta journée commence ici.",
    "how.s2.t": "Planifier", "how.s2.p": "Important, pas urgent. Là où se cache le vrai progrès — donne-lui une date.",
    "how.s3.t": "Déléguer", "how.s3.p": "Urgent, pas important. Confie-le, ou regroupe-le.",
    "how.s4.t": "Éliminer", "how.s4.p": "Ni l’un ni l’autre. Laisse tomber, sans culpabilité.",
    "feat.eyebrow": "L’essentiel, rien de plus",
    "feat.title": "Pensé pour la concentration, <em>pas</em> pour l’agitation.",
    "feat.lede": "Une app iPhone native et apaisée — sans compte, sans fouillis, juste tes priorités.",
    "f.focus.t": "Un minuteur de focus sur l’écran verrouillé",
    "f.focus.p": "Lance un Pomodoro depuis n’importe quelle tâche. Le compte à rebours te suit dans la Dynamic Island et sur l’écran verrouillé — travail, pause courte, pause longue, tout se règle.",
    "f.focus.task": "Préparer le pitch de lundi", "f.focus.phase": "Focus",
    "f.widget.t": "Aujourd’hui, sur l’écran d’accueil", "f.widget.p": "Un widget garde ta liste « Faire » à portée de regard.",
    "f.cal.t": "Un calendrier qui voit loin", "f.cal.p": "Échéances, rappels et tâches récurrentes — quotidiennes, hebdomadaires, mensuelles, annuelles — jour par jour.",
    "f.stats.t": "Ta semaine en un coup d’œil", "f.stats.p": "Tâches terminées, séries, et où ton temps est vraiment passé.",
    "f.sync.t": "Synchronisé via ton iCloud", "f.sync.p": "Tes tâches te suivent d’un appareil à l’autre, stockées dans ton iCloud privé — jamais sur nos serveurs.",
    "f.gesture.t": "Des gestes rapides et natifs", "f.gesture.p": "Balaie pour terminer, reporter ou supprimer. Appui long pour dupliquer. Annuler d’un geste.",
    "f.duo.t": "Prêt pour les pliables", "f.duo.p": "Sur un grand écran intérieur, toute la matrice s’affiche à côté de ta liste, séparée pile sur le pli.",
    "f.lang.t": "Parle ta langue", "f.lang.p": "English, Français, 简体中文 — et un très beau mode sombre.",
    "gal.eyebrow": "De plus près", "gal.title": "Le calme, par <em>design</em>.",
    "gal.matrix": "La matrice", "gal.list": "Toutes tes tâches, cherchables", "gal.calendar": "Calendrier", "gal.stats": "Ta semaine en chiffres", "gal.dark": "Mode sombre",
    "pledge.title": "Tes tâches sont <em>à toi</em>.",
    "pledge.p": "FocusDo n’a ni compte ni serveur. Tes données vivent sur ton iPhone et dans ton iCloud privé — nous ne les voyons pas, et nous ne voulons pas les voir.",
    "pledge.l1": "Aucun compte à créer", "pledge.l2": "Aucun pistage, aucune analytique", "pledge.l3": "Aucune pub, jamais", "pledge.l4": "Exporte tes données quand tu veux",
    "pledge.link": "Lire la politique de confidentialité",
    "final.title": "Tête claire.<br>Liste <em>claire</em>.",
    "final.lede": "FocusDo arrive bientôt sur l’App Store. Téléchargement gratuit.",
    "foot.rights": "© 2026 VilingTech. Fait avec soin.",
    "contact.mail": "Nous écrire", "contact.issue": "Nous contacter",
    "doc.updated": "Dernière mise à jour : 18 novembre 2026",
  },
  "zh-Hans": {
    "nav.changelog": "更新日志", "cl.eyebrow": "更新日志", "cl.title": "版本<em>更新</em>", "cl.lede": "FocusDo 的每个版本，最新的在最上面。",
    "nav.features": "功能", "nav.privacy": "隐私", "nav.support": "帮助",
    "hero.eyebrow": "艾森豪威尔矩阵 · iPhone 版",
    "hero.title": "做<em>重要</em>的事，<br>放下其余的。",
    "hero.lede": "FocusDo 把每件事放进四个格子——紧急、重要、两者都是、或都不是——让你永远清楚下一步该做什么。",
    "cta.soon": "即将上线", "cta.store": "App Store", "cta.how": "了解原理",
    "axis.urgent": "紧急 →", "axis.important": "重要 →",
    "q.do": "立即做", "q.schedule": "计划", "q.delegate": "委派", "q.eliminate": "不必做",
    "t1": "提交第四季度报告", "t2": "给客户回电话", "t3": "规划暑假旅行", "t4": "读《深度工作》",
    "t5": "采购办公用品", "t6": "回复问卷调查", "t7": "整理旧照片", "t8": "退订垃圾邮件",
    "how.eyebrow": "使用原理",
    "how.title": "四个格子，<br><em>一个</em>决定。",
    "how.s1.t": "立即做", "how.s1.p": "紧急且重要。你的一天从这里开始。",
    "how.s2.t": "计划", "how.s2.p": "重要但不紧急。真正的进步藏在这里——给它定个日期。",
    "how.s3.t": "委派", "how.s3.p": "紧急但不重要。交给别人，或集中处理。",
    "how.s4.t": "不必做", "how.s4.p": "既不紧急也不重要。放下它，不必愧疚。",
    "feat.eyebrow": "需要的都有，多余的没有",
    "feat.title": "为专注而生，<em>不</em>为瞎忙。",
    "feat.lede": "一款安静、原生的 iPhone 应用——无需注册，没有干扰，只有你的优先级。",
    "f.focus.t": "锁屏上的专注计时",
    "f.focus.p": "从任意任务开启番茄钟。倒计时会出现在灵动岛和锁屏上——工作、短休息、长休息，时长都可以自定义。",
    "f.focus.task": "准备周一的路演", "f.focus.phase": "专注中",
    "f.widget.t": "主屏幕上的今日任务", "f.widget.p": "小组件让「立即做」清单一眼可见。",
    "f.cal.t": "看得更远的日历", "f.cal.p": "截止日期、提醒和重复任务——每天、每周、每月、每年——按天排好。",
    "f.stats.t": "看清你的一周", "f.stats.p": "完成了多少、连续几天，时间到底花在了哪里。",
    "f.sync.t": "通过你的 iCloud 同步", "f.sync.p": "任务在你的设备间同步，存放在你自己的私有 iCloud 里——从不经过我们的服务器。",
    "f.gesture.t": "顺手的原生手势", "f.gesture.p": "滑动即可完成、推迟或删除，长按复制，一点就能撤销。",
    "f.duo.t": "为折叠屏准备好了", "f.duo.p": "在大尺寸内屏上，整个矩阵与任务列表并排显示，正好沿折痕分开。",
    "f.lang.t": "说你的语言", "f.lang.p": "English、Français、简体中文——还有好看的深色模式。",
    "gal.eyebrow": "细看", "gal.title": "安静，是<em>设计</em>出来的。",
    "gal.matrix": "四象限矩阵", "gal.list": "所有任务，随时搜索", "gal.calendar": "日历", "gal.stats": "用数字看一周", "gal.dark": "深色模式",
    "pledge.title": "你的任务，<em>只属于你</em>。",
    "pledge.p": "FocusDo 没有账号，也没有服务器。你的数据只存在你的 iPhone 和你的私有 iCloud 里——我们看不到，也不想看。",
    "pledge.l1": "无需注册账号", "pledge.l2": "不追踪，不做数据分析", "pledge.l3": "永远没有广告", "pledge.l4": "随时导出你的数据",
    "pledge.link": "阅读隐私政策",
    "final.title": "头脑清楚，<br>清单<em>清楚</em>。",
    "final.lede": "FocusDo 即将登陆 App Store，免费下载。",
    "foot.rights": "© 2026 VilingTech. 用心打造。",
    "contact.mail": "发邮件给我们", "contact.issue": "联系我们",
    "doc.updated": "最后更新：2026 年 11 月 18 日",
  },
};

function pickLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(q)) return q;
  try {
    const saved = localStorage.getItem("focusdo-lang");
    if (LANGS.includes(saved)) return saved;
  } catch (_) { /* storage blocked: fall through */ }
  const nav = (navigator.languages || [navigator.language || "en"]).map((l) => l.toLowerCase());
  for (const l of nav) {
    if (l.startsWith("zh")) return "zh-Hans";
    if (l.startsWith("fr")) return "fr";
    if (l.startsWith("en")) return "en";
  }
  return "en";
}

const dark = window.matchMedia("(prefers-color-scheme: dark)");

function applyShots(lang) {
  document.querySelectorAll("img[data-shot]").forEach((img) => {
    const [tab, forced] = img.dataset.shot.split(":");
    const mode = forced || (dark.matches && (tab === "matrix" || tab === "stats") ? "dark" : "light");
    img.src = `assets/shots/${lang}-${mode}-${tab}.jpg`;
  });
}

function applyContact(lang) {
  const dict = T[lang];
  document.querySelectorAll("[data-contact]").forEach((a) => {
    if (CONTACT.email) {
      a.href = `mailto:${CONTACT.email}`;
      a.textContent = a.dataset.contact === "address" ? CONTACT.email : dict["contact.mail"];
    } else {
      a.href = CONTACT.fallback;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = dict["contact.issue"];
    }
  });
}

// Release notes: assets/changelog.json is appended by the app repo's CI on
// every user-facing merge (newest first).
let changelog = null;
function renderChangelog(lang) {
  const list = document.getElementById("changelog");
  if (!list || !changelog) return;
  const fmt = new Intl.DateTimeFormat(lang, { year: "numeric", month: "long", day: "numeric" });
  list.replaceChildren(...changelog.map((e) => {
    const li = document.createElement("li");
    const h = document.createElement("h2");
    h.textContent = e.version;
    const d = document.createElement("time");
    d.dateTime = e.date;
    d.textContent = fmt.format(new Date(`${e.date}T12:00:00`));
    const p = document.createElement("p");
    p.textContent = e.notes[lang] || e.notes.en;
    li.append(h, d, p);
    return li;
  }));
}

function setLang(lang) {
  const dict = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  const title = document.querySelector("title[data-i18n-title]");
  if (title) {
    const t = title.dataset[`t${lang.replace("-", "").toLowerCase()}`];
    if (t) document.title = t;
  }
  const sel = document.getElementById("lang");
  if (sel) sel.value = lang;
  applyShots(lang);
  applyContact(lang);
  renderChangelog(lang);
  try { localStorage.setItem("focusdo-lang", lang); } catch (_) { /* ignore */ }
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = pickLang();
  setLang(lang);
  const sel = document.getElementById("lang");
  if (sel) sel.addEventListener("change", (e) => { lang = e.target.value; setLang(lang); });
  dark.addEventListener?.("change", () => applyShots(lang));
  if (document.getElementById("changelog")) {
    fetch("assets/changelog.json", { cache: "no-cache" })
      .then((r) => r.json())
      .then((data) => { changelog = data; renderChangelog(lang); })
      .catch(() => { /* list stays empty */ });
  }

  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }
});
