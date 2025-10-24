// (تم التعديل) قاموس النصوص للترجمة - تغيير بسيط في العنوان
const translations = {
  ar: {
    pageTitle: "🔮 الطابور الحتمي🔮",
    langToggleText: "English",
    mainTitle: "Deterministic Queue", // العنوان الجديد
    inputsTitle:
      '<i class="fas fa-sliders-h" style="color: var(--primary-light); margin-left: 8px;"></i> 1. الإعدادات',
    labelArrivalRate: '<i class="fas fa-plane-arrival"></i> معدل الوصول (λ)',
    labelServiceRate: '<i class="fas fa-tools"></i> معدل الخدمة (μ)',
    labelCustomerCount: '<i class="fas fa-users"></i> عدد العملاء (للرسم)',
    labelTimeInput: '<i class="far fa-clock"></i> الزمن t لحساب n(t)',
    drawButtonText: '<i class="fas fa-play"></i> شغل المحاكاة',
    drawButtonLoading: 'جاري الرسم... <i class="fas fa-spinner fa-spin"></i>',
    summaryTitle:
      '<i class="fas fa-clipboard-check" style="margin-right: 5px;"></i> ملخص الحسابات',
    summaryPlaceholder:
      '<i class="fas fa-info-circle"></i> أدخل القيم واضغط "شغل المحاكاة" لعرض النتائج.',
    summaryLambdaLabel: "Arrival Rate (λ)",
    summaryALabel: "Inter-Arrival Time (a)",
    summaryMuLabel: "Service Rate (μ)",
    summarySLabel: "Service Time (s)",
    ntSummaryTitle:
      '<i class="fas fa-calculator" style="margin-right: 5px;"></i> حساب n(t) عند t = ',
    ntFormulaLabel: "Formula",
    ntCalculationLabel: "Calculation",
    ntResultLabel: "n(t)", // تغيير طفيف هنا
    ntErrorPlaceholder:
      '<i class="fas fa-exclamation-circle"></i> أدخل قيمة صالحة (≥ 0) في حقل الزمن (t).',
    diagramTitle:
      '<i class="fas fa-palette" style="color: var(--primary-light); margin-right: 8px;"></i> 2. الرسم البياني',
    legendWait: "وقت الانتظار (Wait)",
    legendService: "وقت الخدمة (Service)",
    errorPrefix: "خطأ:",
    inputError: (field) => ` ${field} يجب أن يكون أكبر من الصفر.`,
    countError: "عدد العملاء يجب أن يكون رقماً صحيحاً أكبر من الصفر.",
    timeError: "الزمن (t) يجب أن يكون رقماً موجباً أو صفراً.",
    rateFormatError: (val) => `القيمة "${val}" غير صالحة.`,
    fractionError: (val) => `الكسر "${val}" غير صالح.`,
  },
  en: {
    pageTitle: "🔮 Deterministic Queue Simulator 🔮",
    langToggleText: "العربية",
    mainTitle: "Deterministic Queue", // العنوان الجديد
    inputsTitle:
      '<i class="fas fa-sliders-h" style="color: var(--primary-light); margin-right: 8px;"></i> 1. Simulation Settings',
    labelArrivalRate: '<i class="fas fa-plane-arrival"></i> Arrival Rate (λ)',
    labelServiceRate: '<i class="fas fa-tools"></i> Service Rate (μ)',
    labelCustomerCount: '<i class="fas fa-users"></i> No. of Customers (Chart)',
    labelTimeInput: '<i class="far fa-clock"></i> Time (t) for n(t)',
    drawButtonText: '<i class="fas fa-play"></i> Run Simulation',
    drawButtonLoading: 'Drawing... <i class="fas fa-spinner fa-spin"></i>',
    summaryTitle:
      '<i class="fas fa-clipboard-check" style="margin-right: 5px;"></i> Calculation Summary',
    summaryPlaceholder:
      '<i class="fas fa-info-circle"></i> Enter values and press "Run Simulation" to see results.',
    summaryLambdaLabel: "Arrival Rate (λ)",
    summaryALabel: "Inter-Arrival Time (a)",
    summaryMuLabel: "Service Rate (μ)",
    summarySLabel: "Service Time (s)",
    ntSummaryTitle:
      '<i class="fas fa-calculator" style="margin-right: 5px;"></i> n(t) Calculation at t = ',
    ntFormulaLabel: "Formula",
    ntCalculationLabel: "Calculation",
    ntResultLabel: "n(t)", // تغيير طفيف هنا
    ntErrorPlaceholder:
      '<i class="fas fa-exclamation-circle"></i> Enter a valid value (≥ 0) for Time (t) to calculate n(t).',
    diagramTitle:
      '<i class="fas fa-palette" style="color: var(--primary-light); margin-right: 8px;"></i> 2. Diagram',
    legendWait: "Waiting Time (Wait)",
    legendService: "Service Time (Service)",
    errorPrefix: "Error:",
    inputError: (field) => ` ${field} must be greater than zero.`,
    countError: "Number of Customers must be a positive integer.",
    timeError: "Time (t) must be a non-negative number.",
    rateFormatError: (val) => `The value "${val}" is invalid.`,
    fractionError: (val) => `The fraction "${val}" is invalid.`,
  },
};

// متغير لتتبع اللغة الحالية
let currentLang = "ar";

// دالة تبديل اللغة
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  applyTranslations();
}

// دالة تطبيق الترجمات
function applyTranslations() {
  const t = translations[currentLang];

  document.getElementById("page-title").textContent = t.pageTitle;
  document.getElementById("lang-toggle-text").textContent = t.langToggleText;
  document.getElementById("main-title").innerHTML = t.mainTitle;
  document.getElementById("inputs-title").innerHTML = t.inputsTitle;
  document.getElementById("label-arrival-rate").innerHTML = t.labelArrivalRate;
  document.getElementById("label-service-rate").innerHTML = t.labelServiceRate;
  document.getElementById("label-customer-count").innerHTML =
    t.labelCustomerCount;
  document.getElementById("label-time-input").innerHTML = t.labelTimeInput;
  // تحديث نص الزر مع الحفاظ على الأيقونة (إذا لم يكن في حالة تحميل)
  const drawButton = document.getElementById("draw-button");
  if (!drawButton.classList.contains("loading")) {
    drawButton.querySelector("span").textContent = t.drawButtonText.replace(
      /<i.*?<\/i>\s*/,
      ""
    );
  }
  document.getElementById("summary-title").innerHTML = t.summaryTitle;
  document.getElementById("summary-placeholder").innerHTML =
    t.summaryPlaceholder;
  document.getElementById("summary-lambda-label").textContent =
    t.summaryLambdaLabel;
  document.getElementById("summary-a-label").textContent = t.summaryALabel;
  document.getElementById("summary-mu-label").textContent = t.summaryMuLabel;
  document.getElementById("summary-s-label").textContent = t.summarySLabel;
  document.getElementById("nt-formula-label").textContent = t.ntFormulaLabel;
  document.getElementById("nt-calculation-label").textContent =
    t.ntCalculationLabel;
  document.getElementById("diagram-title").innerHTML = t.diagramTitle;
  document.getElementById("legend-wait").textContent = t.legendWait;
  document.getElementById("legend-service").textContent = t.legendService;

  // تحديث placeholders
  const arrivalInput = document.getElementById("arrival-rate-input");
  const serviceInput = document.getElementById("service-rate-input");
  const customerInput = document.getElementById("customer-count-input");
  const timeInput = document.getElementById("time-input");
  const langPlaceholders = {
    ar: ["مثال: 1/3 أو 0.5", "مثال: 1/5 أو 0.2", "مثال: 14", "مثال: 11"],
    en: ["e.g., 1/3 or 0.5", "e.g., 1/5 or 0.2", "e.g., 14", "e.g., 11"],
  };
  [arrivalInput, serviceInput, customerInput, timeInput].forEach(
    (input, index) => {
      input.placeholder = langPlaceholders[currentLang][index];
    }
  );

  // تحديث محاذاة الزر بناءً على الاتجاه
  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.style.justifyContent =
    currentLang === "ar" ? "flex-start" : "flex-end";
  // تحديث اتجاه النص في وسيلة الإيضاح
  document.getElementById("legend-wait").style.direction =
    document.documentElement.dir;
  document.getElementById("legend-service").style.direction =
    document.documentElement.dir;
  // تحديث هامش أيقونات العناوين
  document.querySelectorAll("h2 i").forEach((icon) => {
    icon.style.marginLeft = currentLang === "ar" ? "8px" : "0";
    icon.style.marginRight = currentLang === "en" ? "8px" : "0";
  });
  document.querySelector("#summary-title i").style.marginRight =
    currentLang === "en" ? "5px" : "0";
  document.querySelector("#summary-title i").style.marginLeft =
    currentLang === "ar" ? "5px" : "0";

  // إعادة عرض الملخص باللغة الجديدة إذا كانت النتائج موجودة
  const summaryResults = document.getElementById("summary-results");
  if (summaryResults.style.display === "block") {
    // The easiest way is to re-trigger the calculation display part
    // We need the values used last time. We can store them globally or recalculate.
    // Let's just update the static labels for now.
    // A better approach would be to store last calculated values.
    const t_for_nt_val = parseFloat(
      document.getElementById("time-input").value
    );
    if (!isNaN(t_for_nt_val)) {
      document.getElementById("nt-summary-title").innerHTML =
        t.ntSummaryTitle + t_for_nt_val;
      document.getElementById(
        "nt-result-label"
      ).textContent = `n(${t_for_nt_val})`; // Update label with actual t
    }
    const ntErrorPlaceholder = document.getElementById("nt-error-placeholder");
    if (ntErrorPlaceholder.style.display !== "none") {
      ntErrorPlaceholder.innerHTML = t.ntErrorPlaceholder;
    }
  } else {
    // Update placeholder text if results are not shown
    document.getElementById("summary-placeholder").innerHTML =
      t.summaryPlaceholder;
  }
  // Update error message if shown
  const summaryError = document.getElementById("summary-error");
  if (summaryError.style.display !== "none") {
    // Reconstruct the error message potentially needed
  }
}

// دالة مساعدة لتقييم الكسور أو الأرقام
function evaluateRate(rateStr) {
  let rateValue = 0;
  rateStr = rateStr.trim();
  if (rateStr.includes("/")) {
    const parts = rateStr.split("/");
    if (parts.length === 2) {
      const numerator = parseFloat(parts[0]);
      const denominator = parseFloat(parts[1]);
      if (denominator !== 0 && !isNaN(numerator) && !isNaN(denominator)) {
        rateValue = numerator / denominator;
      } else {
        throw new Error(translations[currentLang].fractionError(rateStr));
      }
    } else {
      throw new Error(translations[currentLang].fractionError(rateStr));
    }
  } else {
    rateValue = parseFloat(rateStr);
  }
  if (isNaN(rateValue) || !isFinite(rateValue)) {
    throw new Error(translations[currentLang].rateFormatError(rateStr));
  }
  return rateValue;
}

// دالة واحدة للرسم والحساب
async function drawDiagram() {
  const drawButton = document.getElementById("draw-button");
  const originalButtonHTML = drawButton.innerHTML;
  const loadingText = translations[currentLang].drawButtonLoading;

  drawButton.disabled = true;
  drawButton.classList.add("loading");
  drawButton.innerHTML = loadingText;
  clearDiagram();
  const summaryDiv = document.getElementById("calculation-summary");
  document.getElementById("summary-results").style.display = "none";
  document.getElementById("summary-error").style.display = "none";
  document.getElementById("summary-placeholder").style.display = "flex";
  document.getElementById(
    "summary-placeholder"
  ).innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> ${
    currentLang === "ar" ? "جاري الحساب..." : "Calculating..."
  }`;

  await new Promise((resolve) => setTimeout(resolve, 50));

  const arrivalRateStr = document.getElementById("arrival-rate-input").value;
  const serviceRateStr = document.getElementById("service-rate-input").value;
  const NUM_CUSTOMERS = parseInt(
    document.getElementById("customer-count-input").value
  );
  const t_for_nt = parseFloat(document.getElementById("time-input").value);
  let arrivalRate, interArrivalTime, serviceRate, SERVICE_TIME;

  try {
    arrivalRate = evaluateRate(arrivalRateStr);
    if (arrivalRate <= 0)
      throw new Error(
        translations[currentLang].inputError(
          currentLang === "ar" ? "معدل الوصول (λ)" : "Arrival Rate (λ)"
        )
      );
    interArrivalTime = 1 / arrivalRate;
    serviceRate = evaluateRate(serviceRateStr);
    if (serviceRate <= 0)
      throw new Error(
        translations[currentLang].inputError(
          currentLang === "ar" ? "معدل الخدمة (μ)" : "Service Rate (μ)"
        )
      );
    SERVICE_TIME = 1 / serviceRate;
    if (isNaN(NUM_CUSTOMERS) || NUM_CUSTOMERS <= 0) {
      throw new Error(translations[currentLang].countError);
    }
    document.getElementById("summary-error").style.display = "none";
    document.getElementById("summary-placeholder").style.display = "none";
    document.getElementById("summary-results").style.display = "block";
  } catch (e) {
    document.getElementById("summary-placeholder").style.display = "none";
    document.getElementById("summary-results").style.display = "none";
    document.getElementById("summary-error").style.display = "flex";
    document.getElementById(
      "summary-error"
    ).innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${translations[currentLang].errorPrefix} ${e.message}`;
    drawButton.disabled = false;
    drawButton.classList.remove("loading");
    drawButton.innerHTML = originalButtonHTML;
    return;
  }

  // عرض ملخص (Rate/Time)
  document.getElementById(
    "summary-lambda-value"
  ).textContent = `${arrivalRateStr} (≈ ${arrivalRate.toFixed(4)})`;
  document.getElementById(
    "summary-a-value"
  ).textContent = `${interArrivalTime.toFixed(4)} s`;
  document.getElementById(
    "summary-mu-value"
  ).textContent = `${serviceRateStr} (≈ ${serviceRate.toFixed(4)})`;
  document.getElementById(
    "summary-s-value"
  ).textContent = `${SERVICE_TIME.toFixed(4)} s`;

  // حساب وعرض n(t)
  const ntSection = document.getElementById("nt-summary-section");
  const ntErrorPlaceholder = document.getElementById("nt-error-placeholder");
  ntErrorPlaceholder.style.display = "none";
  ntSection.style.display = "none";
  try {
    if (isNaN(t_for_nt) || t_for_nt < 0)
      throw new Error(translations[currentLang].timeError);
    const a = interArrivalTime,
      s = SERVICE_TIME,
      t = t_for_nt;
    const term1 = Math.floor(t / a);
    const term2_input = t - a;
    const term2 = term2_input < 0 ? 0 : Math.floor(term2_input / s);
    const nt = term1 - term2;
    document.getElementById("nt-summary-title").innerHTML =
      translations[currentLang].ntSummaryTitle + t;
    document.getElementById(
      "nt-formula-value"
    ).textContent = `floor(t/a) - floor((t-a)/s)`;
    document.getElementById(
      "nt-calculation-value"
    ).textContent = `floor(${t}/${a.toFixed(2)}) - floor((${t}-${a.toFixed(
      2
    )})/${s.toFixed(2)}) = ${term1} - ${term2}`;
    document.getElementById("nt-result-label").textContent = `n(${t})`;
    document.getElementById("nt-result-value").textContent = `= ${nt}`;
    ntSection.style.display = "block";
  } catch (e) {
    ntErrorPlaceholder.innerHTML = translations[currentLang].ntErrorPlaceholder;
    ntErrorPlaceholder.style.display = "flex";
    ntErrorPlaceholder.classList.add("placeholder");
  }

  // --- الرسم البياني ---
  const MAX_TIME = 150,
    TIME_UNIT_HEIGHT = 8,
    CUSTOMER_COLUMN_WIDTH = 50;
  document.documentElement.style.setProperty(
    "--tick-height",
    `${TIME_UNIT_HEIGHT}px`
  );
  let timeAxis = document.getElementById("time-axis-y");
  let customerAxis = document.getElementById("customer-axis-x");
  let columnsContainer = document.getElementById("columns-container");
  let lastDepartureTime = 0;
  const barsToAnimate = [];

  for (let i = 1; i <= NUM_CUSTOMERS; i++) {
    const custTick = document.createElement("div");
    custTick.className = "customer-tick-x";
    custTick.style.flexBasis = `${CUSTOMER_COLUMN_WIDTH}px`;
    custTick.textContent = `C${i}`;
    customerAxis.appendChild(custTick);
    const column = document.createElement("div");
    column.className = "customer-column";
    column.style.flexBasis = `${CUSTOMER_COLUMN_WIDTH}px`;
    const arrivalTime = i * interArrivalTime,
      serviceStartTime = Math.max(arrivalTime, lastDepartureTime);
    const departureTime = serviceStartTime + SERVICE_TIME,
      waitTime = serviceStartTime - arrivalTime;
    lastDepartureTime = departureTime;
    if (arrivalTime >= MAX_TIME) {
      columnsContainer.appendChild(column);
      continue;
    }
    if (waitTime > 0.0001) {
      const waitBar = document.createElement("div");
      waitBar.className = "bar-y wait-bar";
      waitBar.style.top = `${arrivalTime * TIME_UNIT_HEIGHT}px`;
      const barHeight = Math.min(waitTime, MAX_TIME - arrivalTime);
      if (barHeight > 0) {
        const targetHeight = barHeight * TIME_UNIT_HEIGHT;
        waitBar.style.setProperty("--bar-target-height", `${targetHeight}px`);
        waitBar.title = `${
          translations[currentLang].legendWait
        }: ${waitTime.toFixed(2)} (${
          currentLang === "ar" ? "يصل" : "Arrives"
        } ${arrivalTime.toFixed(2)}, ${
          currentLang === "ar" ? "يبدأ" : "Starts"
        } ${serviceStartTime.toFixed(2)})`;
        column.appendChild(waitBar);
        barsToAnimate.push(waitBar);
      }
    }
    if (serviceStartTime < MAX_TIME) {
      const serviceBar = document.createElement("div");
      serviceBar.className = "bar-y service-bar";
      serviceBar.style.top = `${serviceStartTime * TIME_UNIT_HEIGHT}px`;
      const barHeight = Math.min(SERVICE_TIME, MAX_TIME - serviceStartTime);
      if (barHeight > 0) {
        const targetHeight = barHeight * TIME_UNIT_HEIGHT;
        serviceBar.style.setProperty(
          "--bar-target-height",
          `${targetHeight}px`
        );
        serviceBar.title = `${
          translations[currentLang].legendService
        }: ${SERVICE_TIME.toFixed(2)} (${
          currentLang === "ar" ? "يبدأ" : "Starts"
        } ${serviceStartTime.toFixed(2)}, ${
          currentLang === "ar" ? "يغادر" : "Departs"
        } ${departureTime.toFixed(2)})`;
        column.appendChild(serviceBar);
        barsToAnimate.push(serviceBar);
      }
    }
    columnsContainer.appendChild(column);
  }

  // --- تشغيل Animation ---
  requestAnimationFrame(() => {
    setTimeout(() => {
      barsToAnimate.forEach((bar) => {
        bar.classList.add("animate");
      });
      setTimeout(() => {
        if (drawButton.classList.contains("loading")) {
          drawButton.disabled = false;
          drawButton.classList.remove("loading");
          drawButton.innerHTML = originalButtonHTML;
        }
      }, 700);
    }, 50);
  });
}

// دالة لمسح الرسم وإعادة بناء المحور Y
function clearDiagram() {
  const timeAxis = document.getElementById("time-axis-y");
  const customerAxis = document.getElementById("customer-axis-x");
  const columnsContainer = document.getElementById("columns-container");
  timeAxis.innerHTML = "";
  customerAxis.innerHTML = "";
  columnsContainer.innerHTML = "";
  const MAX_TIME = 150,
    TIME_UNIT_HEIGHT = 8;
  document.documentElement.style.setProperty(
    "--tick-height",
    `${TIME_UNIT_HEIGHT}px`
  );
  for (let t = 0; t <= MAX_TIME; t++) {
    const tick = document.createElement("div");
    tick.className = "time-tick-y";
    if (t % 5 === 0) {
      tick.textContent = t;
      tick.classList.add("label");
      if (t === 0) {
        tick.classList.add("zero-label");
      }
    }
    timeAxis.appendChild(tick);
  }
}

// مسح الرسم وتطبيق اللغة الافتراضية
window.onload = () => {
  clearDiagram();
  applyTranslations();
};
