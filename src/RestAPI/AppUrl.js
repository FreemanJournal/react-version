export default class AppUrl {
    static BaseUrl = "http://127.0.0.1:8000";

    static GeneralData = this.BaseUrl + '/generalData';

    static MenuItemData = this.BaseUrl + '/menuItemData';

    static PortfolioData = this.BaseUrl + '/portfolioData';   

    static ServiceData = this.BaseUrl + '/serviceData';

    static TeamData = this.BaseUrl + '/teamData';

    static TestimonialVideoData = this.BaseUrl + '/testimonialVideoData';
    static TestimonialReviewData = this.BaseUrl + '/testimonialReviewData';
    static TestimonialData = this.BaseUrl + '/testimonialData';

    static SkillData = this.BaseUrl + '/skillData';

    static CaseStudyGetData = this.BaseUrl + '/caseStudyData';
    static CaseStudyDetailsData = this.BaseUrl + '/caseStudyDetailsData/';

    static ProductPageData = this.BaseUrl + '/productDataFour';
    static ProductSinglePageData = this.BaseUrl + '/productDataDetails/';
    static ProductFAQ = this.BaseUrl + '/productFAQData';

    static ContactGetData = this.BaseUrl + '/contactData';
    static ContactPostData = this.BaseUrl + '/contactData';

    //if this variable is static.then you don't have to create any object for it.

}
