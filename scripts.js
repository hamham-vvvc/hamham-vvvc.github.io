// 用户登录和注册功能（简单示例）
document.getElementById('login-btn')?.addEventListener('click', function() {
    alert('登录功能正在开发中');
});

document.getElementById('register-btn')?.addEventListener('click', function() {
    alert('注册功能正在开发中');
});

document.getElementById('outline-btn')?.addEventListener('click', function() {
    alert('了解更多功能正在开发中');
});

document.querySelectorAll('.hero-buttons .btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('功能正在开发中');
    });
});

// 传统法条案例搜索功能（简单示例）
document.getElementById('search-btn')?.addEventListener('click', function() {
    const keyword = document.getElementById('search-input').value.trim();
    const caseType = document.getElementById('case-type').value.trim();
    const lawRevision = document.getElementById('law-revision').value.trim();

    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }

    // 模拟搜索结果
    const results = [
        { title: '案例1', description: '这是案例1的描述' },
        { title: '案例2', description: '这是案例2的描述' }
    ];

    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<h4>${result.title}</h4><p>${result.description}</p>`;
        resultsList.appendChild(resultItem);
    });
});

// 论文润色功能（简单示例）
document.getElementById('polish-btn')?.addEventListener('click', function() {
    const paperContent = document.getElementById('paper-textarea').value.trim();
    if (!paperContent) {
        alert('请输入论文内容');
        return;
    }

    const polishedText = paperContent.replace(/不规范语言/g, '法言法语'); // 简单示例，实际需要更复杂的处理

    document.getElementById('polished-text').innerText = polishedText;
});

// 法条补充功能（简单示例）
document.getElementById('supplement-btn')?.addEventListener('click', function() {
    const paperContent = document.getElementById('paper-textarea-2').value.trim();
    if (!paperContent) {
        alert('请输入论文内容');
        return;
    }

    const supplementedText = paperContent + '\n\n相关法条：《中华人民共和国民法典》第一千零一十条'; // 简单示例

    document.getElementById('supplemented-text').innerText = supplementedText;
});

// 信息可信度评分和来源分析功能（简单示例）
document.getElementById('analyze-btn')?.addEventListener('click', function() {
    const paperContent = document.getElementById('paper-textarea-3').value.trim();
    if (!paperContent) {
        alert('请输入论文内容');
        return;
    }

    const analysisResult = '可信度评分：8分\n来源：北大法宝、中国裁判文书网'; // 简单示例

    document.getElementById('analysis-result').innerText = analysisResult;
});

document.getElementById('translate-btn')?.addEventListener('click', function() {
    const inputText = document.getElementById('translation-textarea').value.trim();
    if (!inputText) {
        alert('请输入需要翻译的内容');
        return;
    }

    // 模拟翻译结果
    const translations = {
        'English': 'English translation of the input text...',
        'Japanese': '日本語の翻訳...',
        'German': 'Deutsche Übersetzung...',
        'French': 'Traduction française...'
    };

    // 获取用户选择的语言
    const language = prompt('请选择翻译语言（English, Japanese, German, French）：', 'English');
    if (!language || !translations[language]) {
        alert('无效的语言选择');
        return;
    }

    const translatedText = translations[language];
    document.getElementById('translation-result').innerText = translatedText;
});
        // 强制中断机制
        let lastUseTime = Date.now();
        const timeoutDuration = 30 * 60 * 1000; // 30分钟

        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.addEventListener('input', () => {
                lastUseTime = Date.now();
            });
        });

        setInterval(() => {
            if (Date.now() - lastUseTime > timeoutDuration) {
                alert('请先自主归纳要点');
                // 锁定文本框
                textareas.forEach(textarea => {
                    textarea.disabled = true;
                });
            }
        }, 60 * 1000); // 每分钟检查一次

        // 风险警示弹窗
        function copyTextToClipboard() {
            const text = document.querySelector('.result-content').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert('过度依赖将削弱法律人核心能力');
            });
        }

// 提问功能（简单示例）
document.getElementById('public-question-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('public-question-textarea').value.trim();
    if (!question) {
        alert('请输入问题内容');
        return;
    }

    const questionsList = document.getElementById('public-questions-list');

    const questionItem = document.createElement('div');
    questionItem.innerText = question;
    questionsList.appendChild(questionItem);
});

document.getElementById('student-question-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('student-question-textarea').value.trim();
    if (!question) {
        alert('请输入问题内容');
        return;
    }

    const questionsList = document.getElementById('student-questions-list');

    const questionItem = document.createElement('div');
    questionItem.innerText = question;
    questionsList.appendChild(questionItem);
});
 let selectedRole = '';
     let selectedCase = '';
 
     function selectRole(role) {
         selectedRole = role;
         alert(`您已选择角色：${role}`);
         // 可以在这里添加更多逻辑，例如显示或隐藏特定内容
         showRoleInfo(role);
     }
 
     function selectCase(caseType) {
         selectedCase = caseType;
         alert(`您已选择案件类型：${caseType}`);
         document.getElementById('procedure-text').innerText = `以下是关于${caseType}的法庭审判程序说明...`;
         showCaseInfo(caseType);
     }
 
     function sendDiscussion() {
         const textarea = document.getElementById('discussion-textarea');
         const message = textarea.value.trim();
         if (message) {
             const discussionContent = document.getElementById('discussion-content');
             const newMessage = document.createElement('div');
             newMessage.className = 'message';
             newMessage.innerText = `${selectedRole}说：${message}`;
             discussionContent.appendChild(newMessage);
             textarea.value = '';
         } else {
             alert('请输入发言内容');
         }
     }
 
     function showRoleInfo(role) {
         const roleInfo = {
             '法官': '法官负责主持法庭审判，确保审判程序的公正和合法。',
             '原告律师': '原告律师负责代表原告方进行诉讼，提出诉讼请求和证据。',
             '被告律师': '被告律师负责代表被告方进行辩护，反驳原告的诉讼请求。',
             '证人': '证人负责提供与案件相关的证词，协助法庭查明事实。'
         };
         alert(roleInfo[role]);
     }
 
     function showCaseInfo(caseType) {
         const caseInfo = {
             '民事合同纠纷': '民事合同纠纷通常涉及合同的履行、违约责任等问题。',
             '侵权纠纷': '侵权纠纷通常涉及人身权、财产权的侵害，需要确定责任和赔偿。',
             '刑事案件': '刑事案件涉及犯罪行为的认定和处罚，需要进行刑事审判。'
         };
         alert(caseInfo[caseType]);
     }