
    function check(inp, num) {
        var rinNum = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        inp.onblur = function () {
            this.value = this.value.replace(/(\D)/g, "");
            if (rinNum.test(this.value)) {
                return;
            } else {
                this.value = num;

            }
        };
    }

    /*倒计时*/
    var countdown = 59;

    function setTime(obj) {
        if (countdown == 0) {
            obj.removeAttribute("disabled");
            obj.value = "发送验证码";
            countdown = 59;
            return;
        } else {
            obj.setAttribute("disabled", true);
            obj.value = "重新发送(" + countdown + ")";
            countdown--;
        }
        setTimeout(function () {
                setTime(obj)
            }
            , 1000)
    }








