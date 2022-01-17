// import router from "@/router";
import Vue from "vue";

const isAuthenticated = (): boolean => {
    const authToken = localStorage.getItem("token");

    // const currentRoute = router.currentRoute.name;

    if (typeof authToken === "string" && authToken.length) return true;
    return false;
    //     this.$router.push("/home");
    // } else {
    //     this.$router.push("/login");
    // }
};

const logout = (before?: () => void, after?: () => void): boolean => {
    if (before) before();

    if (isAuthenticated()) {
        localStorage.removeItem("token");
        if (after) after();
        return true;
    }

    if (after) after();
    return false;
}

const configMixins = () => {
    Vue.mixin({
        data: function () {
            return {
                isAuthenticated: false,
            };
        },
    });
};

export { isAuthenticated, logout, configMixins };
