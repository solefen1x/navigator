// FAQ Data
const faqData = [
    {
        category: 'Key Contacts',
        icon: 'phone',
        color: 'red',
        items: [
            {
                id: 'kc1',
                question: 'Quility Support Contact Information',
                answer: 'Website: https://hq.quility.com/support | Email: help@quility.com | Phone: 888-784-5489 (Hours: Mon-Fri 8am-6pm EST) | Chat: Web widget on Navigator (Hours: Mon-Fri 8am-12am, Sat & Sun 8am-5pm EST)'
            },
            {
                id: 'kc2',
                question: 'F&G New Business Case Management Contact',
                answer: 'Email: lifecasemanagement@fglife.com | Phone: 1-800-445-6758 Option 2, Option 1. Use for: Policy status/evidence, questions regarding review times, policy details need changed (face amount, name spelling, etc)'
            },
            {
                id: 'kc3',
                question: 'F&G Underwriting Contact',
                answer: 'Email: riskassessment@fglife.com for risk assessments and questions on decision rationale | Telephone Interview (if underwriting ordered): 877-844-5041'
            },
            {
                id: 'kc4',
                question: 'F&G Post-Issue/Purchase Complete Questions',
                answer: 'Phone: 1-888-513-8797 Option Agent, Option 2. Use for: Questions/requests on in force policies (ex: Rate Reductions, Bene changes), billing questions/requests, post freelook policy change requests'
            },
            {
                id: 'kc5',
                question: 'F&G Reissue Contact',
                answer: 'Phone: 1-888-513-8797 Option Agent, Option 2. Reissues are allowed up to 60 days from date of issue with no increase of coverage. Completed reissue form may be sent to: deliveryrequirements@fglife.com'
            }
        ]
    },
    {
        category: 'Definitions',
        icon: 'book',
        color: 'indigo',
        items: [
            {
                id: 'def1',
                question: 'What is a Juvenile in Quantum?',
                answer: 'A juvenile is defined as ages 15 days through 17 years. Juveniles can have up to 50% of the amount of coverage their parent has up to a maximum of $1,000,000 per primary insured. All children should be covered for similar amounts. The application must be signed by the owner, the custodial parent if different than the owner, and insured juveniles ages 15-17.'
            },
            {
                id: 'def2',
                question: 'What is Underwriting?',
                answer: 'Underwriting is the process where F&G evaluates the risk of insuring an applicant. For Quantum, this includes InstApproval (instant digital underwriting using online database checks like MVR, Milliman, Lexis-Nexis, MIB) or Referred to Underwriting (RUW) if additional review is needed. The underwriting process determines eligibility, rate class, and whether a policy can be issued.'
            },
            {
                id: 'def3',
                question: 'What is an Illustration in F&G Quantum?',
                answer: 'An illustration is a required document that projects how your Quantum policy could perform over time based on current assumptions. It shows death benefit changes, cash value growth, premiums, and potential income distributions. In all states, an illustration must be prepared and delivered with the client\'s signature. The illustration software is available on SalesLink at fglife.com.'
            },
            {
                id: 'def4',
                question: 'What is InstApproval?',
                answer: 'InstApproval is F&G\'s exclusive underwriting process that can provide qualified applicants an instant coverage decision with no medical exam, no fluids, and no invasive interview. Same-day/week coverage requires electronic payment (ACH) of initial premium at time of application. If approved, policies can be in-force in a matter of days (typically 2-3 business days).'
            },
            {
                id: 'def5',
                question: 'What is OTAF (Other Than Applied For)?',
                answer: 'OTAF stands for "Other Than Applied For" - this occurs when underwriting offers a different rate class or terms than what was originally applied for. If your case receives an OTAF offer, you can rerun the illustration in Navigator by updating the health rating in the Health Class drop-down, download it, and send it with issue instructions to F&G at lifecasemgmt@FGlife.com with the policy number.'
            }
        ]
    },
    {
        category: 'Requirements',
        icon: 'clipboard',
        color: 'yellow',
        items: [
            {
                id: 'req1',
                question: 'What are the basic eligibility requirements for Quantum?',
                answer: 'Eligible ages: 0-60 | Minimum face amount: $50,000 | Maximum face amount: $500,000 for ages 0-17, $1,000,000 for ages 18-60 | Maximum premium: $500,000 (higher amounts need home office approval) | Available in 49 states (excluding New York and Puerto Rico) | Owner must be age 18+ and a US citizen'
            },
            {
                id: 'req2',
                question: 'What underwriting requirements are needed?',
                answer: 'Quantum uses ID Verification Tools, MIB reports (ordered on all applications), Prescription Drug/Lab History/Medical Claims Info, and Motor Vehicle Reports (MVR). InstApproval cases require NO medical exam, NO fluids, NO paramedical exam. Cases referred to underwriting (RUW) may require a telephone interview conducted by CRL Plus (877-844-5041, Mon-Fri 8am-9pm CT) or additional underwriting details.'
            },
            {
                id: 'req3',
                question: 'What are the citizenship and residency requirements?',
                answer: 'US citizens are fully eligible. Non-US citizens with Permanent Resident Card or specific visas are eligible up to $300,000 max face. Must have resided in US 6 consecutive months in past year and plan to stay permanently. Application must be taken in US, policy delivered in US, funds from US financial institution, physical US address required, income earned and reported in US.'
            }
        ]
    },
    {
        category: 'Process',
        icon: 'settings',
        color: 'blue',
        items: [
            {
                id: 'p1',
                question: 'How do I access Quantum?',
                answer: 'Quantum is written through the Navigator platform which can be accessed through the HQ waffle menu in upper-left hand corner.'
            },
            {
                id: 'p2',
                question: 'What is the difference between the simplified and advanced path?',
                answer: 'The simplified path is your basic solve for death benefit or maximum cash value and/or income with preset index allocations (50/50 S&P + Barclays). The advanced path allows the agent to manipulate the death benefit more and customize the index allocation.'
            },
            {
                id: 'p3',
                question: 'Why was my application referred to UW?',
                answer: 'Quantum applications will be referred to UW if the client\'s answer in the application does not match information that comes back through instant UW checks with MVR, Milliman, Lexis-Nexis, the client has MIB codes that require further investigation, etc.'
            }
        ]
    },
    {
        category: 'Product',
        icon: 'package',
        color: 'green',
        items: [
            {
                id: 'pr1',
                question: 'Is Quantum Instant Decision?',
                answer: 'Yes, Quantum is a fully digitally-underwritten instant decision product through InstApproval. Some cases may be referred to an underwriter if something answered within the app is flagged in the UW check. Turnaround time for RUW is typically within 48hrs. Typical turnaround for InstApproval to in-force is 2-3 business days with electronic payment.'
            },
            {
                id: 'pr2',
                question: 'What index crediting options are available?',
                answer: 'S&P 500 1-Year Point-to-Point with 100% Par (12.00% Cap, 7.05% illustrated rate) | S&P 500 1-Year Point-to-Point with 100% Par and 1% Bonus (9.00% Cap, 5.88% illustrated rate) | Barclays Trailblazer Sectors 5 Index 1-Year Point-to-Point with 170% Par and 1% Bonus (0% Spread, 5.25% illustrated rate) | Fixed Account set annually (4.75% current rate). All guaranteed minimum 0.25% annually.'
            }
        ]
    },
    {
        category: 'General',
        icon: 'help',
        color: 'purple',
        items: [
            {
                id: 'g1',
                question: 'Why do I see "Product Invalid" in Navigator?',
                answer: 'Agents will need to confirm that their F&G personal production number is listed within their Navigator User Profile settings, instead of any DBA or alternate writing numbers. Agents may need to confirm the writing state appointment is on file with F&G.'
            }
        ]
    },
    {
        category: 'Training Materials',
        icon: 'file',
        color: 'orange',
        items: [
            {
                id: 't1',
                question: 'Where can I find agent training materials?',
                answer: 'Training materials are available at https://b2b-hq.quility.com/page/fg-quantum including: F&G Quantum Client Brochure, At-A-Glance Flyer, Pre-Screen Brochure, Quantum Field Underwriting Guide, Client-Fit Guide, and Product and Illustration Training Guide.'
            }
        ]
    }
];

// SVG Icons
const icons = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
    settings: '<circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m5.196-15.804l-4.242 4.242m-5.908 5.909l-4.242 4.242m12.02-.002l-4.242-4.242m-5.908-5.909l-4.242-4.242"></path>',
    package: '<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    help: '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>'
};

// State
let searchTerm = '';
let selectedCategory = 'all';
let expandedItems = new Set();

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryButtons();
    renderFAQ();
    
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderFAQ();
    });
});

// Render category buttons
function renderCategoryButtons() {
    const container = document.getElementById('categoryButtons');
    const categories = ['all', ...faqData.map(c => c.category)];
    
    container.innerHTML = categories.map(cat => `
        <button class="category-btn ${selectedCategory === cat ? 'active' : ''}" 
                onclick="selectCategory('${cat}')">
            ${cat === 'all' ? 'All Categories' : cat}
        </button>
    `).join('');
}

function selectCategory(category) {
    selectedCategory = category;
    renderCategoryButtons();
    renderFAQ();
}

// Render FAQ
function renderFAQ() {
    const filteredData = faqData.map(category => ({
        ...category,
        items: category.items.filter(item => {
            const matchesSearch = searchTerm === '' || 
                item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || category.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
    })).filter(category => category.items.length > 0);
    
    const contentDiv = document.getElementById('faqContent');
    const noResultsDiv = document.getElementById('noResults');
    
    if (filteredData.length === 0) {
        contentDiv.innerHTML = '';
        noResultsDiv.style.display = 'block';
        return;
    }
    
    noResultsDiv.style.display = 'none';
    contentDiv.innerHTML = filteredData.map(category => `
        <div class="category-section">
            <div class="category-header">
                <div class="category-icon icon-${category.color}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${icons[category.icon]}
                    </svg>
                </div>
                <h2 class="category-title">${category.category}</h2>
                <span class="category-count">${category.items.length}</span>
            </div>
            <div class="faq-items">
                ${category.items.map(item => `
                    <div class="faq-item ${expandedItems.has(item.id) ? 'expanded' : ''}" id="item-${item.id}">
                        <button class="faq-question" onclick="toggleItem('${item.id}')">
                            <div class="question-text">${highlightText(item.question)}</div>
                            <div class="chevron">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </button>
                        <div class="faq-answer">
                            <div class="answer-content">
                                ${highlightText(item.answer)}
                                <button class="copy-btn" onclick="copyAnswer('${item.id}', event)">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                    <span>Copy Answer</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function toggleItem(id) {
    if (expandedItems.has(id)) {
        expandedItems.delete(id);
    } else {
        expandedItems.add(id);
    }
    renderFAQ();
}

function copyAnswer(id, event) {
    event.stopPropagation();
    const item = faqData.flatMap(c => c.items).find(i => i.id === id);
    if (item) {
        navigator.clipboard.writeText(item.answer);
        const btn = event.currentTarget;
        btn.classList.add('copied');
        btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>
        `;
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy Answer</span>
            `;
        }, 2000);
    }
}

function highlightText(text) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}
