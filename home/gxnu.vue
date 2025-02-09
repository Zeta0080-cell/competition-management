
<!-- 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果 -->
<template>
    <div class="min-h-screen bg-gray-50">
    <!-- 主体内容 -->
    <main class="py-12 max-w-7xl mx-auto px-4">
    <div class="mb-8 flex items-center justify-between">
    <div class="flex items-center space-x-4">
    <img :src="logoUrl" alt="Logo" class="h-12 w-12 object-contain"/>
    <h1 class="text-2xl font-bold text-gray-800">广西师范大学全日制普通本科生学科竞赛清单（2023修订）</h1>
    </div>
    <div class="text-gray-600">
    {{ new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) }}
    </div>
    </div>
    <!-- 分类标签 -->
    <div class="mb-8">
    <el-tabs v-model="activeTab" class="competition-tabs">
    <el-tab-pane label="一类竞赛" name="first" />
    <el-tab-pane label="二类竞赛" name="second" />
    <el-tab-pane label="三类竞赛" name="third" />
    </el-tabs>
    </div>
    <div class="flex gap-8">
    <!-- 竞赛列表 -->
    <div class="flex-1">
    <div class="grid grid-cols-1 gap-6">
    <div v-for="competition in competitions" :key="competition.id"
    class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <div class="p-6">
    <div>
    <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ competition.name }}</h2>
    <div class="flex items-center space-x-4 mb-4">
    <span :class="['px-2 py-1 rounded text-sm', competition.levelClass]">
    {{ competition.level }}
    </span>
    <span class="text-gray-500 text-sm">主办方：{{ competition.organizer }}</span>
    </div>
    </div>
    <p class="text-gray-600 mb-4 line-clamp-2">{{ competition.description }}</p>
    <a :href="competition.website" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm flex items-center">
    <el-icon class="mr-1"><Link /></el-icon>
    访问官方网站
    </a>
    </div>
    </div>
    </div>
    <!-- 分页 -->
    <div class="mt-8 flex justify-center">
    <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="total"
    :page-sizes="[10, 20, 30, 40]"
    layout="total, sizes, prev, pager, next"
    />
    </div>
    </div>
    </div>
    </main>
    </div>
    </template>
    <script lang="ts" setup>
    import { ref, watch } from 'vue';
    import { Link } from '@element-plus/icons-vue';
    const logoUrl = 'https://ai-public.mastergo.com/ai/img_res/564b447e14bb5d7ad326366ec4737201.jpg';
    const activeTab = ref('first');
    const currentPage = ref(1);
    const pageSize = ref(10);
    const total = ref(100);
    watch([activeTab, currentPage], ([newTab, newPage]) => {
    // 根据不同的tab显示不同分类的竞赛
    competitions.value = allCompetitions[newTab as keyof typeof allCompetitions];
    // 在这里可以根据currentPage进行分页数据的获取
    // 这里模拟了分页效果，实际应用中需要对接后端API
    });
    const allCompetitions = {
    first: [
    {
    id: 1,
    name: '中国国际“互联网+”大学生创新创业大赛',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer: '浙江大学',
    status: '报名中',
    statusType: 'success',
    description: '推动高校深化教育教学改革，转变教育思想观念，创新人才培养机制与模式。引导高校将创新创业教育融入人才培养全过程，提升课程的高阶性、创新性和挑战度，丰富课程内容，改进教学方法，从而提高高校教育教学质量，培养具有创新精神、创业意识和创新创业能力的高素质专门人才。',
    deadline: '2024-04-30',
    website: 'http://cxcyds.zju.edu.cn/'
    },
    {
    id: 2,
    name: '“田家炳杯”全国师范院校师范生教学技能竞赛',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer: '全国地方高等师范院校教务处长联席会议 ',
    status: '报名中',
    statusType: 'success',
    description: '竞赛聚焦教学实践，强调对师范生教学设计、课堂讲授、教学方法运用、教学媒体使用等核心教学技能的考核。通过模拟真实教学场景，让师范生将所学教育理论知识转化为实际教学行动，促使其在实践中不断打磨教学技能，为未来走上讲台奠定坚实基础。',
    deadline: '2024-06-01',
    website: 'https://qgjxjn.zjnu.edu.cn/bks/main.htm'
    },
    {
    id: 3,
    name: '“挑战杯”中国大学生课外学术科技作品竞赛',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer: '共青团中央 中国科协 教育部 中国社会科学院 全国学联',
    status: '进行中',
    statusType: 'warning',
    description: '鼓励大学生崇尚科学精神，积极探索未知领域。竞赛倡导学生以严谨的态度对待学术研究，勇于突破常规思维，在科学技术、社会调研等领域深入钻研，追求真理，不断提升对客观世界的认知水平，力求产出具有科学性、创新性和实用性的学术科技成果。',
    deadline: '2024-05-15',
    website: 'https://www.tiaozhanbei.net/'
    },
    {
    id: 4,
    name: '全国大学生数学建模竞赛',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer: '中国工业与应用数学学会',
    status: '进行中',
    statusType: 'warning',
    description: '鼓励学生运用数学知识和计算机技术等，创造性地建立数学模型来解决实际问题，在实践中锻炼创新思维和实际动手能力，提高学生解决实际问题的综合素质。将数学与物理、化学、生物、工程、管理等多学科知识相结合，使学生在跨学科的问题解决过程中，拓宽知识面，培养综合运用多学科知识的能力，促进学科间的交流与融合。',
    deadline: '2024-05-15',
    website: 'https://www.mcm.edu.cn/'
    },
    {
    id: 5,
    name: 'ACM-ICPC国际大学生程序设计竞赛',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer: '美国计算机协会',
    status: '进行中',
    statusType: 'warning',
    description: '在IBM开展的众多学术活动中，赞助ACM-ICPC赛事占有十分重要的位置。此举旨在促进开放源代码编程技巧的发展，培养更具竞争力的IT工作人员，从而推动全球创新和经济增长。ACM-ICPC大赛是一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。',
    deadline: '2024-05-15',
    website: 'https://icpc.global/'
    },
    {
    id: 6,
    name: '全国大学生电子设计竞赛',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer: '全国大学生电子设计竞赛组织委员会',
    status: '进行中',
    statusType: 'warning',
    description: '鼓励大学生将所学的电子信息类专业知识，如电路原理、模拟电子技术、数字电子技术等理论知识，应用到实际的电子系统设计与制作中。通过竞赛，让学生在实践中深化对理论知识的理解，提高知识运用能力和动手实践能力，解决实际问题。',
    deadline: '2024-05-15',
    website: 'http://nuedc.xjtu.edu.cn/'
    },
    {
    id: 7,
    name: '外研社全国大学生英语系列赛',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer: '外语教学与研究出版社',
    status: '进行中',
    statusType: 'warning',
    description: '旨在通过不同形式的比赛项目，全面提升学生的听、说、读、写、译等综合语言运用能力，使学生能够熟练掌握和运用外语进行有效的沟通和交流。',
    deadline: '2024-05-15',
    website: 'https://events.fltrp.com/'
    },
    {
    id: 8,
    name: '奥运会、亚运会、全运会、世锦赛（世界杯）和亚锦赛（亚洲杯）、世界大学生运动会和全国学生（青年）运动会',
    level: '一类竞赛',
    levelClass: 'bg-blue-100 text-blue-800',
    organizer:'各大体育协会',
    status: '进行中',
    statusType: 'warning',
    description: '鼓励运动员不断挑战自我，突破身体极限，提高运动技能和竞技水平，追求更高、更快、更强的目标，展示人类在体育领域的最高成就。',
    deadline: '2024-05-15',
    },
    ],

    second: [
    
    
    ],

    third: [
        {
        id: 1,
        name: '一类、二类竞赛的全区选拔赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '各大赛事主办方',
        status: '进行中',
        statusType: 'warning',
        description: '',
        },
        {
        id: 2,
        name: '广西高校大学生学科专业竞赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '各大赛事主办方',
        status: '进行中',
        statusType: 'warning',
        description: '',
        },
        {
        id: 3,
        name: '全区师范生信息化教学应用大赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '广西壮族自治区教育厅',
        status: '进行中',
        statusType: 'warning',
        description: '鼓励师范生将信息技术手段，如多媒体教学软件、在线教学平台、教育技术工具等，深度融入到教学设计与实施中，探索信息技术在教学各环节的有效应用方式，提高教学效果和质量，促进教学模式和方法的创新变革。',
        website:'http://www.gxeta.cn/',
        },
        {
        id: 4,
        name: '全区师德师风演讲比赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '广西壮族自治区教育厅',
        status: '进行中',
        statusType: 'warning',
        description: '深度挖掘和广泛传播师德师风的核心内涵，涵盖爱岗敬业、关爱学生、教书育人、为人师表、终身学习等要素。将这些抽象的师德要求具象化为一个个生动的教育故事和鲜活的教师形象，让每一位参与者与听众，都能深刻领会师德的真谛，在教育领域内形成弘扬高尚师德的良好风气。',
        website:'http://www.gxeta.cn/',
        },
        {
        id: 5,
        name: '全国法科学生写作大赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '湖南大学法学院',
        status: '进行中',
        statusType: 'warning',
        description: '为法科学生提供一个交流学术成果和思想观点的平台，激发学生对法学学术研究的兴趣。学生们可以在大赛中展示自己的研究成果，与其他高校的优秀学生相互学习、交流和借鉴，拓宽学术视野，营造良好的法学学术研究氛围，推动法学教育和学术研究的发展。',
        website:'http://law.hnu.edu.cn/',
        },
        {
        id: 6,
        name: '中国-东盟教育交流周',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '中国-东盟教育交流周组委会',
        status: '进行中',
        statusType: 'warning',
        description: '为中国与东盟各国政府、教育机构、学校及企业等提供一个多边对话与合作的平台，促进各方在教育政策、人才培养、学术研究等方面的交流与沟通。',
        website:'https://www.caedin.cn/',
        },
        {
        id: 7,
        name: '全国高等师范院校大学生化学实验邀请赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '安徽师范大学化学与材料科学学院化学实验中心',
        status: '进行中',
        statusType: 'warning',
        description: '为全国各高等师范院校提供一个交流的平台，各院校的师生可以在邀请赛期间相互学习、相互交流，分享实验教学改革经验、实验室建设管理经验以及学生培养模式等方面的成果，促进校际之间的合作与共同发展。',
        website:'https://cetc.ahnu.edu.cn/qggdsfyxdxshxsyyqs.htm',
        },
        {
        id: 8,
        name: '广西高校国际中文教育教学技能大赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '广西壮族自治区教育厅',
        status: '进行中',
        statusType: 'warning',
        description: '激励学生主动深入学习国际中文教育的专业知识，从汉语语言本体知识，如语音、词汇、语法、汉字等，到教学理论与方法，如第二语言教学法、教学设计原理等，全方位提升知识储备。通过备赛与竞赛，促使学生将理论知识转化为实际教学能力，例如在教学技能展示环节，学生需根据给定的语言点或文化主题，设计并实施教学方案，以此锻炼教学设计、课堂组织、教学评价等实践技能，在竞赛压力与交流学习中不断进步。',
        },
        {
        id: 9,
        name: '广西艺术作品展',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '广西壮族自治区文学艺术界联合会',
        status: '进行中',
        statusType: 'warning',
        description: '通过举办高水平的艺术作品展，展示广西的文化艺术成就，提升广西的文化软实力，为建设文化强区贡献力量，推动广西经济社会的全面发展。',
        website:'https://www.gxwenlian.com/',
        },
        {
        id: 10,
        name: '广西音乐舞蹈比赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '广西壮族自治区文化和旅游厅',
        status: '进行中',
        statusType: 'warning',
        description: '通过比赛的形式，为广西的音乐舞蹈创作者和表演者提供一个展示才华的平台，鼓励他们不断创新和提高，促进广西音乐舞蹈艺术的创作水平和表演技巧的提升，推动广西音乐舞蹈事业的繁荣发展34。',
        website:'http://wlt.gxzf.gov.cn/',
        },
        {
        id: 11,
        name: '广西学生体育竞赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '广西壮族自治区体育局',
        status: '进行中',
        statusType: 'warning',
        description: '广西学生体育竞赛秉持着全面育人、促进交流、传承发展、公平公正、创新进取的理念，在推动学生体育发展、助力学生成长等方面发挥关键作用',
        website:'http://tyj.gxzf.gov.cn/',
        },
        {
        id: 12,
        name: '广西大学生单项体育竞赛',
        level: '三类竞赛',
        levelClass: 'bg-yellow-100 text-yellow-800',
        organizer: '各大院校体育学院',
        status: '进行中',
        statusType: 'warning',
        description: '秉持对体育极致的追求，鼓励运动员不断挑战自我，突破体能与技术极限，向更高的竞技水平攀登，以追求更快、更高、更强、更团结的体育精神为赛事核心价值。',
        website:'',
        },
    ]
    };
    const competitions = ref(allCompetitions.first);
    </script>
    <style scoped>
    .competition-tabs :deep(.el-tabs__header) {
    margin-bottom: 0;
    }
    .competition-tabs :deep(.el-tabs__nav-wrap::after) {
    height: 1px;
    }
    .competition-tabs :deep(.el-tabs__item) {
    font-size: 16px;
    padding: 0 24px;
    }
    .competition-tabs :deep(.el-tabs__active-bar) {
    height: 3px;
    }
    </style>
    