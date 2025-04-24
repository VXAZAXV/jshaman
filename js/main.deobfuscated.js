/*
Current IP: 8.218.248.244
Domain: jshaman.com
Directory: /js
File: main.js
Country: Shan Xi, CN
Obfuscation Techniques Similiar To: obfuscator.io
Deobfuscated By: VXAZ
Difficulty: 3/10
*/
$(function () {
  $("#reserved_name").tagsInput({
    "width": "auto",
    "height": "25px",
    "maxChars": 128,
    "onAddTag": function () {}
  });
  $("#domain_lock").tagsInput({
    "width": "auto",
    'height': "25px",
    "maxChars": 128,
    "onAddTag": function () {}
  });
  $("#baoliuzhi_upload").tagsInput({
    "width": "auto",
    "height": "25px",
    "maxChars": 128,
    'onAddTag': function () {}
  });
  $("#domain_lock_upload").tagsInput({
    "width": "auto",
    "height": "25px",
    'maxChars': 128,
    'onAddTag': function () {}
  });
  $("#reserved_name_upload").tagsInput({
    "width": "auto",
    "height": "25px",
    "maxChars": 128,
    "onAddTag": function () {}
  });
});
$(function () {
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      document.getElementById("appName").style.opacity = 1;
      document.getElementById("loading").style.opacity = 0;
      document.getElementById("loading").style.display = "none";
    }
  };
});
window.onload = function () {
  document.getElementById("appName").style.display = "block";
  document.getElementById("loading").style.display = "none";
  document.getElementById("common_vip_code").value = get_cookie("jshaman_vip_code");
  document.getElementById("vip_code_upload").value = get_cookie("jshaman_vip_code");
  var aj = get_cookie("zoom");
  if (aj != undefined && isNaN(aj) == false) {
    document.body.style.zoom = aj;
    document.getElementById("zoom").innerHTML = parseFloat(document.body.style.zoom).toFixed(2);
  }
  var ao = document.body.clientWidth;
  if (ao <= 1024) {
    $(".btn").removeClass("hide");
    $(".header ul").hide();
  } else {
    $.each($("#nav li"), function (ar, as) {
      var bb = $(this).width();
      var bd = bb / 2;
      $(this).find("span").css("left", bd + "px");
    });
  }
};
$(document).ready(function () {
  $("input").iCheck({
    'checkboxClass': "icheckbox_square-green"
  });
});
{
  for (i = 1; i < 15; i++) {
    var bg_div = document.createElement("div");
    bg_div.style.overflow = "hidden";
    bg_div.setAttribute("di".split("").reverse().join(""), "bg_ani_div_" + i);
    bg_div.setAttribute("width", "fit-content");
    bg_div.style.position = "static";
    bg_div.style.color = "#ffffff";
    document.getElementById("mybg").appendChild(bg_div);
  }
  var animation_handle;
  var font_size;
  var font_opacity;
  function bg_animation() {
    for (j = 0; j < 15; j++) {
      try {
        var bj = "bg_ani_div_" + parseInt(15 * Math.random());
        var bl = document.getElementById(bj);
        bl.style.overflow = "hidden";
        var bm = ["console.log();", "function();", "require('querystring');", "var i = 0;", "getElementById();", "document.bod", "rnd.style.paddingLeft=0;", "Math.random();", "if(req.url.toLowerCase()==\"/action/\"){", "for(i=0;i<shield_address.length;i++){", "var domain=shield_address[i][0]", "if(domain.substr(domain.length-1,1)==\"/\"){", "console.log(\"js\");", "Nan", "js obfuscator", "obfuscate js online", "0101", "Alert"];
        bl.innerHTML = bm[parseInt(bm.length * Math.random())];
        var bn = ["verdana", "arial", "serif", "sans-serif"];
        bl.style.fontFamily = bn[parseInt(bn.length * Math.random())];
        var bo = parseInt(document.body.clientWidth * Math.random() / 5);
        if (bo < 10) {
          bo = 30 + "xp".split("").reverse().join("");
        } else {
          bo = bo + "px";
        }
        var ca = parseInt(document.body.clientHeight * Math.random() / 10);
        if (ca < 100) {
          ca = "100px";
        } else {
          ca = ca + "px";
        }
        bl.style.paddingLeft = bo;
        bl.style.paddingTop = ca;
        bl.className = "bg_ani";
        bl.style.animation = "slideShow 5s infinite";
        if (bl.innerHTML.length < 10) {
          font_size = parseInt(60 * Math.random() + 120);
        } else {
          font_size = parseInt(30 * Math.random());
        }
        if (font_size < 10) {
          font_opacity = Math.floor(Math.random() * 10) / 10;
          if (font_opacity >= 0.6) {
            font_opacity = font_opacity - 0.55;
          }
          bl.style.opacity = font_opacity;
          bl.style.fontWeight = 100;
          font_size = font_size + 10;
          font_size = font_size + "px";
        } else {
          font_opacity = Math.floor(Math.random() * 10) / 10;
          if (font_opacity > -0.6) {
            font_opacity = font_opacity - 0.59;
          }
          bl.style.opacity = font_opacity;
          font_size = font_size + "px";
        }
        bl.style.fontSize = font_size;
        bl.style.left = font_size;
      } catch (cp) {}
    }
  }
  bg_animation();
  animation_handle = setInterval("bg_animation()", 1600);
}
function copy_protect_result(cs) {
  var ct = document.getElementById(cs);
  if (ct.value.length == 0) {
    $.alert({
      "boxWidth": "320px",
      "useBootstrap": false,
      "title": "错误!",
      "content": "无内容可复制。"
    });
    return;
  }
  ct.select();
  document.execCommand("copy");
  $.alert({
    "boxWidth": "320px",
    "useBootstrap": false,
    "title": "提示!",
    "content": "复制成功。"
  });
}
function save_protect_result(cw) {
  var cx = document.getElementById(cw).value;
  if (cx.length == 0) {
    $.alert({
      "boxWidth": "320px",
      'useBootstrap': false,
      "title": "错误!",
      "content": "无内容可保存。"
    });
    return;
  }
  var cy = new Blob([cx], {
    'type': "text/plain"
  });
  var cz = window.URL.createObjectURL(cy);
  var db = "jshaman_" + new Date().getTime() + ".js";
  var de = document.createElement("a");
  de.download = db;
  de.href = cz;
  de.style.display = "none";
  document.body.appendChild(de);
  de.click();
  document.body.removeChild(de);
}
function js_select_file(df) {
  document.getElementById(df).click();
}
function clear_content(dg) {
  document.getElementById(dg).value = '';
}
function read_js_file(dh, dj) {
  var dk = document.getElementById(dh).files[0];
  var dm = new FileReader();
  dm.onload = function (dn) {
    var dq = dn.target.result;
    document.getElementById(dj).value = dq;
  };
  dm.readAsText(dk);
}
function question_buy() {
  $.confirm({
    "useBootstrap": false,
    'animationBounce': 1.5,
    'boxWidth': "320px",
    "title": false,
    'content': "需输入正确的VIP码，才能使用此功能。",
    "buttons": {
      "购买VIP码": {
        'isHidden': false,
        'keys': ["B"],
        "btnClass": "btn-red",
        "action": function () {
          document.getElementById("buy").click();
        }
      },
      "取消": {
        "keys": ["N"],
        'action': function () {}
      }
    }
  });
}
function question_remote_call() {
  $.confirm({
    "useBootstrap": false,
    "animationBounce": 1.5,
    'boxWidth': "320px",
    'title': "引用地址",
    'content': "在您的网站代码中，使用'script src='方法引用JShaman多态地址，可获得每次都不同的安全JS代码。<br>此方式称为多态变异，代码随机变幻、安全度高。",
    'buttons': {
      "购买": {
        'isHidden': true,
        "keys": ["B"],
        'btnClass': "btn-red",
        "action": function () {
          window.open("test.html");
        }
      },
      "知道了": {
        'keys': ["N"],
        "action": function () {}
      }
    }
  });
}
var current_jshaman_server = 0;
current_jshaman_server = parseInt(jshaman_servers.length * Math.random());
var server_busy = false;
function is_server_busy(dy) {
  var dz = "http://" + jshaman_servers[current_jshaman_server].http + "/status/";
  if (window.location.protocol.toLowerCase() == "https:") {
    dz = "https://" + jshaman_servers[current_jshaman_server].https + "/status/";
  }
  $.ajax({
    "url": dz,
    'timeout': 3000,
    'type': "get",
    "complete": function (ec, ed) {
      dy(ed.toLowerCase());
    }
  }).done(function (ef) {
    var eg = ef.online_users;
    server_busy = ef.server_busy;
    document.getElementById("total_obfuscated").innerHTML = ef.total_obfuscated;
    if (eg == undefined) {
      return;
    }
    if (eg.length < 10) {
      document.getElementById("onlines_container").style.display = "none";
      return;
    } else {
      document.getElementById("onlines_container").style.display = "block";
    }
    for (i = 0; i < 10; i++) {
      document.getElementById("obf_status_" + i).style.display = "none";
      document.getElementById("obf_status_sub_" + i).style.display = "none";
    }
    for (i = 0; i < 10; i++) {
      if (i >= eg.length) {
        return;
      }
      var fb = Math.floor(Math.random() * 60);
      if (fb > 60) {
        fb = 60;
      }
      if (fb < 5) {
        fb = 5;
      }
      document.getElementById("obf_status_" + i).style.width = fb + "px";
      document.getElementById("obf_status_" + i).style.display = "block";
      var ff = document.getElementById("obf_status_" + i).height;
      document.getElementById("obf_status_" + i).style.opacity = 1;
      if (eg[i].code_size < 5) {
        document.getElementById("obf_status_" + i).style.opacity = 0.3;
      }
      if (eg[i].code_size < 0.5) {
        document.getElementById("obf_status_" + i).style.opacity = 0.2;
      }
      document.getElementById("obf_status_sub_" + i).style.visibility = "none";
      document.getElementById("obf_status_sub_" + i).innerHTML = "<span style='font-size:8px; opacity:1;'>" + new Date().toLocaleString() + "</span><br><span style='font-size:14px; opacity:1;'>" + eg[i].ip + "</span><br><span style='font-size:10px;'>" + eg[i].msg + "<br>代码量：<span style='font-size:15px; opacity:1;'>" + eg[i].code_size + "</span> kb";
      if (eg[i].msg.indexOf("Html") != -1) {}
      if (eg[i].msg.indexOf("缩压".split("").reverse().join("")) != -1) {}
      if (eg[i].msg.indexOf("Zip") != -1) {}
      if (window.location.toString().toLowerCase().indexOf("jshaman.com") == -1) {
        document.getElementById("obf_status_sub_" + i).style.opacity = 0;
      }
    }
  });
}
function hide_status_bar_sub() {
  for (i = 0; i < 10; i++) {
    document.getElementById("obf_status_sub_" + i).style.display = "none";
  }
}
setInterval(check_server_state, 3000);
function check_server_state() {
  is_server_busy(function (fs) {
    if (fs == "timeout" || server_busy == true) {
      document.getElementById("server_state_bg").style.background = "#ff6600";
      document.getElementById("server_state_msg").innerHTML = "服务器繁忙";
      document.getElementById("server_state_tip_detail").innerHTML = "服务器后台正在进行密集混淆加密任务，请稍等候...";
    }
    if (fs == "error") {
      document.getElementById("server_state_bg").style.background = "#cc0033";
      document.getElementById("server_state_msg").innerHTML = "服务器异常";
      document.getElementById("server_state_tip_detail").innerHTML = "如果您的网络状态正常，而服务器长时间显示异常，请联系客服咨询或处理";
    }
    if (fs == "success") {
      document.getElementById("server_state_bg").style.background = "#00b300";
      document.getElementById("server_state_msg").innerHTML = "服务器流畅";
      document.getElementById("server_state_tip_detail").innerHTML = "服务器流畅，尽请使用";
    }
  });
}
check_server_state();
function show_state_detail() {
  document.getElementById("server_state_tip_detail").style.display = "inline-block";
}
function hide_state_detail() {
  document.getElementById("server_state_tip_detail").style.display = "none";
}
function check_and_submit(fv, fw) {
  check_server_state();
  get_online_users();
  is_server_busy(function (fx) {
    if (fx == "timeout") {
      $.alert({
        'boxWidth': "320px",
        'useBootstrap': false,
        'title': "提示!",
        'content': "服务器繁忙中，暂时无法处理请求，请稍等候。"
      });
      return;
    }
    if (fx == "error") {
      $.alert({
        "boxWidth": "320px",
        "useBootstrap": false,
        "title": "提示!",
        'content': "服务器异常，无法处理请求，请向客服咨询处理。"
      });
      return;
    }
    if (fx == "success") {
      if (fw) {
        if (document.getElementById(fw).value.length / 1024 / 1024 > 2) {
          $.confirm({
            'useBootstrap': false,
            "animationBounce": 1.5,
            'boxWidth': "320px",
            "title": "提示",
            'content': "检测到代码量较大。如果代码是由WebPack、Rollup等打包生成、建议对原始JavaScript代码或文件混淆加密。",
            "buttons": {
              "继续提交": {
                'action': function () {
                  fv();
                }
              },
              "放弃提交": {
                'btnClass': "btn-red",
                'keys': ["N"],
                'action': function () {
                  return;
                }
              }
            }
          });
        } else {
          fv();
        }
      } else {
        fv();
      }
    }
  });
}
function free_submit_source() {
  var gq = document.getElementById("free_code_source").value;
  if (gq.length == 0) {
    $.alert({
      'boxWidth': "320px",
      "useBootstrap": false,
      "title": "错误!",
      "content": "JS代码为空。"
    });
    return;
  }
  $.confirm({
    "useBootstrap": false,
    'animationBounce': 1.5,
    "boxWidth": "320px",
    "title": "提示!",
    "content": function () {
      var gs = this;
      var gt = "http://" + jshaman_servers[current_jshaman_server].http + "/submit_js_code/";
      if (window.location.protocol.toLowerCase() == "https:") {
        gt = "https://" + jshaman_servers[current_jshaman_server].https + "/submit_js_code/";
      }
      return $.ajax({
        "url": gt,
        'dataType': "json",
        "data": {
          "js_code": gq,
          "config": {},
          "vip_code": "free"
        },
        'method': "POST"
      }).done(function (gy) {
        gs.setContent(gy.message);
        document.getElementById("free_code_result").value = gy.content;
        if (gy.status == 0) {
          document.getElementById("free_result").click();
        }
      }).fail(function () {
        gs.setContent("发生了未知错误！");
      });
    },
    "buttons": {
      "yes": {
        "isHidden": true
      },
      '确定': {
        "keys": ["N"],
        "action": function () {}
      }
    }
  });
}
function common_submit_source(jg) {
  var jh = document.getElementById("common_code_source").value;
  if (jh.length == 0) {
    $.alert({
      "boxWidth": "320px",
      "useBootstrap": false,
      "title": "错误!",
      "content": "JS代码为空。"
    });
    return;
  }
  if (document.getElementById("common_vip_code").value.length == 0) {
    $.alert({
      "boxWidth": "320px",
      "useBootstrap": false,
      "title": '提示',
      "content": "请输入VIP码。"
    });
    return;
  }
  if (document.getElementById("common_vip_code").value.length >= 49) {
    $.alert({
      'boxWidth': "320px",
      "useBootstrap": false,
      "title": "错误!",
      "content": "VIP码不正确。"
    });
    return;
  }
  var jk = document.getElementById("domain_lock").value;
  var jm = [];
  if (document.getElementById("checkbox-domain_lock").checked == true) {
    if (jk.length != 0) {
      jm = jk.split(",");
    }
  }
  var jn = document.getElementById("reserved_name").value;
  var jo = [];
  if (document.getElementById("checkbox-reserved_name").checked == true) {
    if (jn.length != 0) {
      jo = jn.split(",");
    }
  }
  var timeStart = document.getElementById("time_range_start").value.split("-");
  var timeEnd = document.getElementById("time_range_end").value.split("-");
  timeStart = timeStart[0] + timeStart[1] + timeStart[2];
  timeEnd = timeEnd[0] + timeEnd[1] + timeEnd[2];
  var jy = {
    'compact': document.getElementById("checkbox-compact").checked,
    "renameGlobalFunctionVariable": document.getElementById("checkbox-rename_global_function_variable").checked,
    "controlFlowFlattening": document.getElementById("checkbox-control_flow_flattening").checked,
    "stringArray": document.getElementById("checkbox-string_array").checked,
    "stringArrayEncoding": document.getElementById("checkbox-string_array_encoding").checked,
    "disableConsoleOutput": document.getElementById("checkbox-disable_console_output").checked,
    'debugProtection': document.getElementById("checkbox-debug_protection").checked,
    "domainLock": jm,
    "reservedNames": jo,
    "deadCodeInjection": document.getElementById("checkbox-dead_code_injection").checked,
    "time_range": document.getElementById("checkbox-time_range").checked,
    "time_start": timeStart,
    "time_end": timeEnd
  };
  $.confirm({
    "useBootstrap": false,
    "animationBounce": 1.5,
    "boxWidth": "320px",
    "title": "提示!",
    "content": function () {
      var jz = this;
      var ka = "http://" + jshaman_servers[current_jshaman_server].http + "/submit_js_code/";
      if (window.location.protocol.toLowerCase() == "https:") {
        ka = "https://" + jshaman_servers[current_jshaman_server].https + "/submit_js_code/";
      }
      if (jg == true) {
        ka = "http://" + async_obfuscate_servers[current_jshaman_server].http + "/submit_js_code/";
        if (window.location.protocol.toLowerCase() == "https:") {
          ka = "https://" + async_obfuscate_servers[current_jshaman_server].https + "/submit_js_code/";
        }
      }
      return $.ajax({
        'url': ka,
        "dataType": "json",
        'data': {
          "js_code": jh,
          'config': jy,
          "vip_code": document.getElementById("common_vip_code").value,
          "later": jg
        },
        "method": "POST",
        'error': function (ke, kf, kg) {}
      }).done(function (kh) {
        jz.setContent(kh.message);
        if (jg == true) {
          return;
        }
        if (kh.status == 0) {
          document.getElementById("common_result").click();
          document.getElementById("common_code_result").value = kh.content;
        }
      }).fail(function () {
        jz.setContent("发生了未知错误！");
      });
    },
    "buttons": {
      'yes': {
        'isHidden': true
      },
      "确定": {
        'keys': ["O"],
        'action': function () {}
      }
    }
  });
}
function common_submit_source_try() {
  var kp = document.getElementById("common_code_source").value;
  if (kp.length == 0) {
    $.alert({
      "boxWidth": "320px",
      "useBootstrap": false,
      "title": "错误!",
      "content": "JS代码为空。"
    });
    return;
  }
  var ks = document.getElementById("domain_lock").value;
  var ku = [];
  if (document.getElementById("checkbox-domain_lock").checked == true) {
    if (ks.length != 0) {
      ku = ks.split(",");
    }
  }
  var kv = document.getElementById("reserved_name").value;
  var kw = [];
  if (document.getElementById("checkbox-reserved_name").checked == true) {
    if (kv.length != 0) {
      kw = kv.split(",");
    }
  }
  var timeStartClone = document.getElementById("time_range_start").value.split("-");
  var timeEndClone = document.getElementById("time_range_end").value.split("-");
  timeStartClone = timeStartClone[0] + timeStartClone[1] + timeStartClone[2];
  timeEndClone = timeEndClone[0] + timeEndClone[1] + timeEndClone[2];
  var ld = {
    'compact': document.getElementById("checkbox-compact").checked,
    "renameGlobalFunctionVariable": document.getElementById("checkbox-rename_global_function_variable").checked,
    "controlFlowFlattening": document.getElementById("checkbox-control_flow_flattening").checked,
    "stringArray": document.getElementById("checkbox-string_array").checked,
    'stringArrayEncoding': document.getElementById("checkbox-string_array_encoding").checked,
    "disableConsoleOutput": document.getElementById("checkbox-disable_console_output").checked,
    'debugProtection': document.getElementById("checkbox-debug_protection").checked,
    'domainLock': ku,
    "reservedNames": kw,
    'deadCodeInjection': document.getElementById("checkbox-dead_code_injection").checked,
    "time_range": document.getElementById("checkbox-time_range").checked,
    "time_start": timeStartClone,
    "time_end": timeEndClone
  };
  $.confirm({
    "useBootstrap": false,
    "animationBounce": 1.5,
    'boxWidth': "320px",
    "title": "提示!",
    "content": function () {
      var lf = this;
      var lg = "http://" + jshaman_servers[current_jshaman_server].http + "/submit_js_code/";
      if (window.location.protocol.toLowerCase() == "https:") {
        lg = "https://" + jshaman_servers[current_jshaman_server].https + "/submit_js_code/";
      }
      return $.ajax({
        'url': lg,
        "dataType": "json",
        'data': {
          'js_code': kp,
          'config': ld,
          "vip_code": "try"
        },
        'method': "POST",
        "error": function (lh, lj, lk) {}
      }).done(function (ll) {
        lf.setContent(ll.message);
        if (ll.status == 0) {
          document.getElementById("common_result").click();
          document.getElementById("common_code_result").value = ll.content;
        }
      }).fail(function () {
        lf.setContent("发生了未知错误！");
      });
    },
    'buttons': {
      "yes": {
        "isHidden": true
      },
      "确定": {
        'keys': ["O"],
        'action': function () {}
      }
    }
  });
}
function polymorphic_submit_source() {
  var ln = document.getElementById("polymorphic_code_source").value;
  if (ln.length == 0) {
    $.alert({
      "boxWidth": "320px",
      'useBootstrap': false,
      "title": "错误!",
      "content": "JS代码为空。"
    });
    return;
  }
  if (document.getElementById("polymorphic_vip_code").value.length == 0) {
    $.alert({
      'boxWidth': "320px",
      "useBootstrap": false,
      'title': "错误!",
      'content': "请输入VIP码"
    });
    return;
  }
  document.getElementById("polymorphic_remote_call").style.display = "none";
  $.confirm({
    'useBootstrap': false,
    'animationBounce': 1.5,
    "boxWidth": "320px",
    'title': "提示!",
    "content": function () {
      var ml = this;
      var mn = "http://" + jshaman_servers[current_jshaman_server].http + "/submit_js_code/";
      if (window.location.protocol.toLowerCase() == "https:") {
        mn = "https://" + jshaman_servers[current_jshaman_server].https + "/submit_js_code/";
      }
      return $.ajax({
        "url": mn,
        "dataType": "json",
        'data': {
          'js_code': ln,
          "config": {
            'polymorphic': 1
          },
          "vip_code": document.getElementById("polymorphic_vip_code").value
        },
        "method": "POST"
      }).done(function (mo) {
        ml.setContent(mo.message);
        if (mo.message.indexOf("[^o^]") != -1) {
          document.getElementById("polymorphic_remote_call_address").value = "https://" + jshaman_servers[current_jshaman_server].https + "/polymorphic/?id=" + mo.content;
          document.getElementById("polymorphic_remote_call").style.display = "block";
        }
      }).fail(function () {
        ml.setContent("发生了未知错误！");
      });
    },
    "buttons": {
      'yes': {
        "isHidden": true
      },
      "确定": {
        "keys": ["O"],
        'action': function () {}
      }
    }
  });
}
function upload_submit(mz) {
  if (document.getElementById("zip_file_to_upload").files[0] == undefined) {
    $.alert({
      'boxWidth': "320px",
      'useBootstrap': false,
      "title": "错误!",
      'content': "请选择要上传的文件。"
    });
    return;
  }
  if (document.getElementById("vip_code_upload").value.length == 0) {
    $.alert({
      'boxWidth': "320px",
      "useBootstrap": false,
      "title": "提示",
      "content": "请输入VIP码。"
    });
    return;
  }
  if (document.getElementById("vip_code_upload").value.length >= 49) {
    $.alert({
      'boxWidth': "320px",
      'useBootstrap': false,
      "title": "错误！",
      "content": "VIP码不正确。"
    });
    return;
  }
  var uploadProgress = document.getElementById("time_range_start_upload").value.split("-");
  var tillUploadCompleted = document.getElementById("time_range_end_upload").value.split("-");
  uploadProgress = uploadProgress[0] + uploadProgress[1] + uploadProgress[2];
  tillUploadCompleted = tillUploadCompleted[0] + tillUploadCompleted[1] + tillUploadCompleted[2];
  var nj = new FormData();
  nj.append("zip_file", document.getElementById("zip_file_to_upload").files[0]);
  nj.append("compact", document.getElementById("checkbox-compact_upload").checked);
  nj.append("renameGlobalFunctionVariable", document.getElementById("checkbox-rename_global_function_variable_upload").checked);
  nj.append("controlFlowFlattening", document.getElementById("checkbox-control_flow_flattening_upload").checked);
  nj.append("stringArray", document.getElementById("checkbox-string_array_upload").checked);
  nj.append("stringArrayEncoding", document.getElementById("checkbox-string_array_encoding_upload").checked);
  nj.append("disableConsoleOutput", document.getElementById("checkbox-disable_console_output_upload").checked);
  nj.append("debugProtection", document.getElementById("checkbox-debug_protection_upload").checked);
  nj.append("deadCodeInjection", document.getElementById("checkbox-dead_code_injection_upload").checked);
  nj.append("time_range", document.getElementById("checkbox-time_range_upload").checked);
  nj.append("time_start", uploadProgress);
  nj.append("time_end", tillUploadCompleted);
  var nk = document.getElementById("domain_lock_upload").value;
  var nm = [];
  if (document.getElementById("checkbox-domain_lock_upload").checked == true) {
    if (nk.length != 0) {
      nm = nk.split(",");
    }
  }
  var no = document.getElementById("reserved_name_upload").value;
  var np = [];
  if (document.getElementById("checkbox-reserved_name_upload").checked == true) {
    if (no.length != 0) {
      np = no.split(",");
    }
  }
  nj.append("vip_code", document.getElementById("vip_code_upload").value);
  if (mz != undefined) {
    nj.append("later", mz);
  }
  nj.append("domainLock", nm);
  nj.append("reservedNames", np);
  $.confirm({
    'useBootstrap': false,
    "animationBounce": 1.5,
    "boxWidth": "320px",
    "title": "提示!",
    'content': function () {
      var ny = this;
      var oa = "http://" + jshaman_servers[current_jshaman_server].http + "/upload_zip_file/";
      if (window.location.protocol.toLowerCase() == "https:") {
        oa = "https://" + jshaman_servers[current_jshaman_server].https + "/upload_zip_file/";
      }
      if (mz == true) {
        oa = "http://" + async_obfuscate_servers[current_jshaman_server].http + "/upload_zip_file/";
        if (window.location.protocol.toLowerCase() == "https:") {
          oa = "https://" + async_obfuscate_servers[current_jshaman_server].https + "/upload_zip_file/";
        }
      }
      return $.ajax({
        "url": oa,
        "data": nj,
        'cache': false,
        'processData': false,
        "contentType": false,
        'type': "POST"
      }).done(function (ow) {
        upload_zip_finish = false;
        ny.setContent(ow.message);
        ny.setContentAppend('');
        if (mz == true) {
          ny.autoClose = false;
          return;
        }
        if (ow.message.indexOf("[^_^]") != -1) {
          document.getElementById("upload_zip_result").click();
          document.getElementById("upload_zip_file").style.display = "none";
          document.getElementById("download_zip_file").style.display = "none";
          document.getElementById("upload_result").value = "文件已上传，正在处理...";
          document.getElementById("upload_time_token").value = ow.content;
          can_change_server = false;
          setTimeout(function () {
            uploaded_zip_process();
          }, 3000);
        }
      }).fail(function () {
        ny.setContent("发生了未知错误！");
        document.getElementById("upload_zip_file").style.display = "block";
        can_change_server = true;
      });
    },
    "autoClose": "确定|9000",
    "buttons": {
      "yes": {
        "isHidden": true
      },
      "确定": {
        "keys": ["O"],
        "action": function () {}
      }
    }
  });
}
var can_change_server = true;
var upload_zip_finish = false;
function uploaded_zip_process() {
  can_change_server = false;
  var pe = "http://" + jshaman_servers[current_jshaman_server].http + "/uploaded_zip_process/";
  if (window.location.protocol.toLowerCase() == "https:") {
    pe = "https://" + jshaman_servers[current_jshaman_server].https + "/uploaded_zip_process/";
  }
  return $.ajax({
    'url': pe,
    "dataType": "json",
    'data': {
      "vip_code": document.getElementById("vip_code_upload").value,
      "upload_time_token": document.getElementById("upload_time_token").value
    },
    "method": "POST",
    'timeout': 3000,
    "complete": function (pf, pg) {
      var ph = pg.toLowerCase();
      if (ph == "timeout") {
        document.getElementById("upload_timeout").innerHTML = new Date().toString().replace("GMT+0800 (中国标准时间)", '') + "，正在处理上传的文件，请稍候…如太长时间未完成，请联系客服咨询";
        document.getElementById("upload_timeout").style.display = "block";
        if (document.visibilityState === "visible") {
          $.confirm({
            "boxWidth": "380px",
            'useBootstrap': false,
            'title': "Zip文件处理中，请等待...",
            'content': new Date().toString().replace("GMT+0800 (中国标准时间)", '') + "，正在处理上传的Zip文件，请稍候…如太长时间未完成，请联系客服咨询",
            "autoClose": "确定|3000",
            "buttons": {
              '确定': function () {}
            }
          });
        }
        setTimeout(function () {
          document.getElementById("upload_timeout").style.display = "none";
        }, 3000);
        setTimeout(function () {
          uploaded_zip_process();
        }, 3000);
      }
      if (ph == "error") {
        $.alert({
          'boxWidth': "320px",
          'useBootstrap': false,
          'title': "提示",
          "content": "发生了未知错误！"
        });
        can_change_server = true;
      }
      if (ph == "success") {}
    }
  }).done(function (pn) {
    if (pn.content.length != 0 && typeof pn.content == "string") {
      setTimeout(function () {
        uploaded_zip_process();
      }, 3000);
      return;
    }
    if (pn.content.length == 0 && upload_zip_finish == false) {
      setTimeout(function () {
        uploaded_zip_process();
      }, 3000);
      return;
    }
    for (i = 0; i < pn.content.length; i++) {
      var pu = pn.content[i].indexOf("[^_^]");
      if (pu != -1) {
        upload_zip_finish = true;
        var pv = 11;
        var pw = pn.content[i].substring(pu + "[^_^]".length);
        pv = "fdonca";
        var py = 8;
        var pz = "http://" + jshaman_servers[current_jshaman_server].http + "/download/?id=";
        py = 5;
        if (window.location.protocol.toLowerCase() == "https:") {
          pz = "https://" + jshaman_servers[current_jshaman_server].https + "/download/?id=";
        }
        can_change_server = true;
        var pz = pz + pw;
        document.getElementById("upload_zip_file").style.display = "block";
        document.getElementById("download_zip_file").style.display = "block";
        document.getElementById("download_zip_file").value = pz;
        document.getElementById("download_zip_file").onclick = function () {
          window.open(this.value);
        };
        var qc = document.getElementById("upload_result").value;
        document.getElementById("upload_result").value = qc + "\n" + "Zip文件上传混淆加密全部完成，可以下载文件了";
        document.getElementById("upload_result").scrollTop = document.getElementById("upload_result").scrollHeight;
      } else {
        var qc = document.getElementById("upload_result").value;
        document.getElementById("upload_result").value = qc + "\n" + pn.content[i];
        document.getElementById("upload_result").scrollTop = document.getElementById("upload_result").scrollHeight;
      }
    }
    if (upload_zip_finish == false) {
      setTimeout(function () {
        uploaded_zip_process();
      }, 3000);
      return;
    }
  });
}
function copy_webapi_example() {
  var qg = document.getElementById("webapi_example");
  if (qg.value.length <= 0) {
    $.alert({
      "boxWidth": "320px",
      "useBootstrap": false,
      'title': "错误!",
      'content': "无内容。"
    });
    return;
  }
  qg.select();
  document.execCommand("copy");
  $.alert({
    'boxWidth': "320px",
    "useBootstrap": false,
    'title': "提示!",
    "content": "复制成功。"
  });
}
function ask_for_try() {
  $.alert({
    "boxWidth": "320px",
    "useBootstrap": false,
    "title": "申请试用",
    'content': "请联系我们，获取试用版。"
  });
  return;
}
function more_menu() {
  $.confirm({
    "useBootstrap": false,
    'title': false,
    "content": "更多功能",
    "animationBounce": 1.5,
    'boxWidth': "320px",
    "buttons": {
      "Html加密服务": {
        "isHidden": false,
        "keys": ["B"],
        "btnClass": "btn-red",
        'action': function () {
          window.open("html_encode.html");
        }
      },
      "VIP码状态查询": {
        "isHidden": false,
        "keys": ["B"],
        'btnClass': "btn-red",
        'action': function () {
          window.open("vip_state.html");
        }
      },
      "Eval加密": {
        "isHidden": false,
        "keys": ["B"],
        "btnClass": "btn-red",
        "action": function () {
          window.open("eval_encode.html");
        }
      },
      "FAQs": {
        "isHidden": false,
        "keys": ["B"],
        "btnClass": "btn-red",
        "action": function () {
          window.open("faqs.html");
        }
      }
    },
    "theme": "supervan",
    "closeIcon": true
  });
}
var full_screen_flag = 0;
function full_screen() {
  if (full_screen_flag == 0) {
    full_screen_flag = 1;
    document.documentElement.requestFullscreen();
    document.getElementById("full_screen").src = "images/not_full_screen.png";
  } else {
    full_screen_flag = 0;
    document.exitFullscreen();
    document.getElementById("full_screen").src = "images/full_screen.png";
  }
}
function change_server() {
  return;
  if (can_change_server == false) {
    $.alert({
      'boxWidth': "320px",
      'useBootstrap': false,
      'title': '',
      "content": "上传的文件正在处理中，请等待操作完成"
    });
    return;
  }
  var rf = "如当前服务器繁忙、功能未能及时响应等，可在此更换路线。<br><br>";
  for (var rg = 0; rg < jshaman_servers.length; rg++) {
    rf += "<label><input type='radio' name='jshaman_server' checked='false'>" + jshaman_servers[rg].name + "</label><br>";
  }
  $.confirm({
    'useBootstrap': false,
    "animationBounce": 1.5,
    "boxWidth": "340px",
    "title": false,
    "content": rf,
    'buttons': {
      '确定': {
        "keys": ["N"],
        "action": function () {
          jshaman_server_changed();
          check_server_state();
          return;
          $.alert({
            "boxWidth": "350px",
            'useBootstrap': false,
            "title": '提示',
            "content": "JShaman服务器线路，已切换到线路：" + jshaman_server_changed() + "。"
          });
        }
      }
    },
    "onOpenBefore": function () {
      set_jshaman_server();
    }
  });
}
function jshaman_server_changed() {
  var rk = document.getElementsByName("jshaman_server");
  for (var rl = 0; rl < rk.length; rl++) {
    if (rk[rl].checked) {
      current_jshaman_server = rl;
      return rk[rl].value;
    }
  }
}
function set_jshaman_server() {
  var rn = document.getElementsByName("jshaman_server");
  rn[current_jshaman_server].checked = true;
}
function set_cookie(ro, rp) {
  var rq = new Date();
  rq.setTime(rq.getTime() + 2592000000);
  document.cookie = ro + "=" + escape(rp) + ";expires=" + rq.toGMTString();
  if (rp.length >= 1) {
    document.getElementById("common_vip_code_tip").innerHTML = "VIP码已保存到本地Cookie";
    document.getElementById("vip_code_upload_tip").innerHTML = "VIP码已保存到本地Cookie";
  } else {
    document.getElementById("common_vip_code_tip").innerHTML = "请先输入VIP码";
    document.getElementById("vip_code_upload_tip").innerHTML = "请先输入VIP码";
  }
  show_vip_code_tip();
  hide_vip_code_tip();
}
function get_cookie(sa) {
  var sb;
  var sc = new RegExp("(^|)" + sa + "=([^;]*)(;|$)");
  if (sb = document.cookie.match(sc)) {
    document.getElementById("common_vip_code_tip").innerHTML = "已从本地Cookie读取VIP码";
    document.getElementById("vip_code_upload_tip").innerHTML = "已从本地Cookie读取VIP码";
    if (sb[2].length < 1) {
      document.getElementById("common_vip_code_tip").innerHTML = "已从本地Cookie读取，但VIP码似乎不正确";
      document.getElementById("vip_code_upload_tip").innerHTML = "已从本地Cookie读取，但VIP码似乎不正确";
    }
    show_vip_code_tip();
    hide_vip_code_tip();
    return unescape(sb[2]);
  } else {
    document.getElementById("common_vip_code_tip").innerHTML = "没有读取到内容";
    document.getElementById("vip_code_upload_tip").innerHTML = "没有读取到内容";
    show_vip_code_tip();
    hide_vip_code_tip();
    return null;
  }
}
function del_cookie(se) {
  var sf = new Date();
  sf.setTime(sf.getTime() - 1);
  var sg = get_cookie(se);
  if (sg != null) {
    document.cookie = se + "=" + sg + ";expires=" + sf.toGMTString();
    document.getElementById("common_vip_code_tip").innerHTML = "VIP码已清除";
    document.getElementById("vip_code_upload_tip").innerHTML = "VIP码已清除";
  } else {
    document.getElementById("common_vip_code_tip").innerHTML = "Cookie中没有VIP码";
    document.getElementById("vip_code_upload_tip").innerHTML = "Cookie中没有VIP码";
  }
  show_vip_code_tip();
  hide_vip_code_tip();
}
function show_vip_code(ta) {
  var tb = document.getElementById(ta);
  tb.type = "text";
  document.getElementById("common_vip_code_tip").innerHTML = "VIP码已设为显示";
  document.getElementById("vip_code_upload_tip").innerHTML = "VIP码已设为显示";
  show_vip_code_tip();
  hide_vip_code_tip();
}
function hide_vip_code(tc) {
  var td = document.getElementById(tc);
  td.type = "password";
  document.getElementById("common_vip_code_tip").innerHTML = "VIP码已设为隐藏";
  document.getElementById("vip_code_upload_tip").innerHTML = "VIP码已设为隐藏";
  show_vip_code_tip();
  hide_vip_code_tip();
}
function show_vip_code_tip() {
  document.getElementById("common_vip_code_tip").style.display = "inline-block";
  document.getElementById("vip_code_upload_tip").style.display = "inline-block";
}
function hide_vip_code_tip() {
  setTimeout(function () {
    document.getElementById("common_vip_code_tip").style.display = "none";
    document.getElementById("vip_code_upload_tip").style.display = "none";
  }, 3000);
}
function common_time_range_init() {
  var te = new Date().getMonth() + 1;
  if (te.toString().length == 1) {
    te = "0" + te;
  }
  var tk = new Date().getDate();
  if (tk.toString().length == 1) {
    tk = "0" + tk;
  }
  var tn = 13;
  var to = new Date().getFullYear() + "-" + te + "-" + tk;
  tn = "peelki";
  $("#data_common input").flatpickr({
    'defaultDate': to
  });
}
common_time_range_init();
function upload_time_range_init() {
  var tp = new Date().getMonth() + 1;
  if (tp.toString().length == 1) {
    tp = "0" + tp;
  }
  var tt = new Date().getDate();
  if (tt.toString().length == 1) {
    tt = "0" + tt;
  }
  var tu = new Date().getFullYear() + "-" + tp + "-" + tt;
  $("#data_upload input").flatpickr({
    "defaultDate": tu
  });
}
upload_time_range_init();
console.log("JShaman，专注于JavaScript源代码安全：JS加密、JS混淆、H5加固");
foot_tip();
Interval_foot_tip();
var agent = window.location.toString().match(new RegExp("(&|/?)agent=([^&]*)", "i"));
if (agent != null) {
  document.cookie = "agent=" + agent[2] + ";";
  console.log("推荐人ID:", agent[2]);
}
window.onresize = function () {
  fix_two_div_position();
};
function fix_two_div_position() {
  if (window.innerWidth <= 1080) {
    document.getElementById("left_server_state").style.left = "15px";
    document.getElementById("right_more_main").style.right = "15px";
    document.getElementById("server_state_tip_detail").style.left = "15px;";
    document.getElementById("right_more").style.right = "15px;";
    document.getElementById("right_more").style.display = "none";
    document.getElementById("right_more_main").style.display = "block";
  } else {
    document.getElementById("left_server_state").style.left = "50px";
    document.getElementById("right_more_main").style.right = "50px";
    document.getElementById("server_state_tip_detail").style.left = "27px;";
  }
}
fix_two_div_position();
function get_online_users() {
  try {
    $.ajax({
      'url': "https://www.jshaman.com/onlines/",
      "timeout": 3000,
      "type": "post",
      "complete": function (tv, tw) {}
    }).done(function (tx) {
      document.getElementById("onlines").innerHTML = tx.user_count;
      if (window.location.toString().toLowerCase().indexOf("jshaman.com") == -1) {
        document.getElementById("onlines_container").style.opacity = 0;
      }
    });
  } catch (up) {
    document.getElementById("onlines_container").style.display = "none";
  }
}
get_online_users();
setInterval(function () {
  get_online_users();
}, 5000);
function save_to_cookie(uq, ur, us) {
  us = us * 60 * 60 * 1000 * 24;
  const ut = new Date();
  ut.setTime(ut.getTime() + us);
  document.cookie = uq + "=" + ur + ";expires=" + ut.toGMTString() + ";path=/";
}
function get_from_cookie(uu, uv) {
  uv = '';
  const uw = document.cookie.split("; ");
  for (let ux = 0; ux < uw.length; ux++) {
    const uy = uw[ux].split("=");
    if (uy[0] === uu) {
      uv = uy[1];
      break;
    }
  }
  return uv;
}
var now_year = new Date().getFullYear();
var now_month = new Date().getMonth() + 1;
var now_day = new Date().getDate();
var on_sale = false;
var on_sale_tip = '';
if (now_month == 1) {
  if (now_day <= 7) {
    on_sale = true;
    on_sale_tip = "优惠活动：『元旦』特卖活动进行中，时间：" + now_year + "年1月1日-7日，价格：中文版：9800/年，英文版：6800/年。";
  }
}
if (now_month == 5) {
  if (now_day <= 15) {
    on_sale = true;
    on_sale_tip = "优惠活动：『五一』特卖活动进行中，时间：" + now_year + "年5月1日-14日，价格：中文版：9800/年，英文版：6800/年。";
  }
}
if (now_month == 10) {
  if (now_day <= 15) {
    on_sale = true;
    on_sale_tip = "优惠活动：『国庆』特卖活动进行中，时间：" + now_year + "年10月1日-14日，价格：中文版：9800/年，英文版：6800/年。";
  }
}
if (now_month == 11) {
  if (now_day >= 10 && now_day <= 12) {
    on_sale = true;
    on_sale_tip = "优惠活动：『双11』特卖活动进行中，时间：" + now_year + "年11月10日-12日，价格：中文版：9800/年，英文版：6800/年。";
  }
}
if (on_sale == false && now_month >= 1) {
  on_sale_tip = "优惠预告：" + now_year + "『五一』特卖，时间：" + now_year + "年5月1日-15日，预计活动价：中文版：9800/年，英文版：6800/年。";
}
if (on_sale == false && now_month >= 5) {
  on_sale_tip = "优惠预告：" + now_year + "『国庆』特卖，时间：" + now_year + "年10月1日-15日，预计活动价：中文版：9800/年，英文版：6800/年。";
}
if (on_sale == false && now_month >= 10) {
  on_sale_tip = "优惠预告：" + now_year + "『双11』特卖，时间：" + now_year + "年11月10日-12日，预计活动价：中文版：9800/年，英文版：6800/年。";
}
if (on_sale == false && now_month >= 11) {
  if (now_day > 12) {
    on_sale_tip = "优惠预告：" + (now_year + 1) + "『元旦』特卖，时间：" + (now_year + 1) + "年1月1日-7日，预计活动价：中文版：9800/年，英文版：6800/年。";
  }
}
document.getElementById("on_sale_tip").innerHTML = on_sale_tip;
document.getElementById("on_sale_tip").style.fontSize = "13px";
if (on_sale == true) {
  document.getElementById("on_sale_tip").style.fontSize = "14px";
}
document.getElementById("on_sale_tip").style.display = "none";
function fresh() {
  var vi = new Date("2021/8/1,12:0:0");
  var vk = new Date();
  var vl = parseInt((vi.getTime() - vk.getTime()) / 1000);
  d = parseInt(vl / 3600 / 24);
  h = parseInt(vl / 3600 % 24);
  m = parseInt(vl / 60 % 60);
  s = parseInt(vl % 60);
  document.getElementById("times").innerHTML = d + "天" + h + "时小".split("").reverse().join("") + m + "分" + s + "秒";
  if (vl <= 0) {
    document.getElementById("times").innerHTML = "已结束";
    clearInterval(sh);
  }
}
function refresh_vip_info() {
  dz_ed_1 = false;
  var vp = document.getElementById("vip_type").value;
  if (vp == "99") {
    document.getElementById("yuan_jia").innerHTML = "299元";
    document.getElementById("xian_jia").innerHTML = "99";
    document.getElementById("you_xiao").innerHTML = "一个月";
    document.getElementById("ke_yong").innerHTML = "提交代码、Web API、异步混淆加密";
    document.getElementById("xian_zhi").innerHTML = "不可用Zip文件上传";
    document.getElementById("da_xiao").innerHTML = "单个JS代码量上限：< 2MB";
  }
  if (vp == "699") {
    document.getElementById("yuan_jia").innerHTML = "2299元";
    document.getElementById("xian_jia").innerHTML = "699";
    document.getElementById("you_xiao").innerHTML = "一年";
    document.getElementById("ke_yong").innerHTML = "提交代码、Zip文件上传、Web API、异步混淆加密";
    document.getElementById("xian_zhi").innerHTML = "单个JS代码量上限：< 3MB";
    document.getElementById("da_xiao").innerHTML = "可上传ZIP文件大小：< 4MB";
  }
  if (vp == "2999") {
    document.getElementById("yuan_jia").innerHTML = "6999元";
    document.getElementById("xian_jia").innerHTML = "2999";
    document.getElementById("you_xiao").innerHTML = "久永".split("").reverse().join("");
    document.getElementById("ke_yong").innerHTML = "提交代码、Zip文件上传、Web API、异步混淆加密";
    document.getElementById("xian_zhi").innerHTML = "单个JS代码量上限：< 4MB";
    document.getElementById("da_xiao").innerHTML = "可上传ZIP文件大小：< 6MB";
  }
}
function refresh_vip_info_2() {
  dz_ed_2 = false;
  var vr = document.getElementById("vip_times").value;
  if (vr == "69") {
    document.getElementById("xian_jia_times").innerHTML = "69";
    document.getElementById("da_xiao_times").innerHTML = "单个JS代码量上限：< 2MB";
  }
  if (vr == "499") {
    document.getElementById("xian_jia_times").innerHTML = "499";
    document.getElementById("da_xiao_times").innerHTML = "单个JS代码量上限：< 3MB";
  }
  if (vr == "1999") {
    document.getElementById("xian_jia_times").innerHTML = "1999";
    document.getElementById("da_xiao_times").innerHTML = "单个JS代码量上限：< 4MB";
  }
}
var dz_ed_1 = false;
var dz_ed_2 = false;
function vip_code_dz(wf) {
  var wh = '';
  if (wf == 1) {
    if (document.getElementById("vip_code_dz").value.length == 0) {
      $.alert({
        "boxWidth": "300px",
        'useBootstrap': false,
        "title": "提示",
        "content": "请输入VIP码。"
      });
      return;
    }
    wh = document.getElementById("vip_code_dz").value;
  }
  if (wf == 2) {
    if (document.getElementById("vip_code_dz_times").value.length == 0) {
      $.alert({
        'boxWidth': "300px",
        "useBootstrap": false,
        "title": "提示",
        'content': "请输入VIP码。"
      });
      return;
    }
    wh = document.getElementById("vip_code_dz_times").value;
  }
  $.confirm({
    "useBootstrap": false,
    'animationBounce': 1.5,
    "boxWidth": "300px",
    "title": "提示!",
    'content': function () {
      var wx = this;
      var wy = "http://www.jshaman.com:800/vip_code_state/";
      if (window.location.protocol.toLowerCase() == "https:") {
        wy = "https://www.jshaman.com:4430/vip_code_state/";
      }
      return $.ajax({
        "url": wy,
        "dataType": "json",
        "data": {
          'vip_code': wh
        },
        "method": "POST",
        'error': function (wz, xa, xb) {}
      }).done(function (xc) {
        if (xc.state == 1) {
          wx.setContent(xc.message);
        } else {
          if (wf == 1) {
            if (dz_ed_1 == false) {
              document.getElementById("xian_jia").innerHTML = (document.getElementById("xian_jia").innerHTML * long_on_sale_value).toFixed(0);
              dz_ed_1 = true;
              wx.setContent("已享折扣。");
            } else {
              wx.setContent("您已享折扣，快去支付吧。");
            }
          }
          if (wf == 2) {
            if (dz_ed_2 == false) {
              document.getElementById("xian_jia_times").innerHTML = (document.getElementById("xian_jia_times").innerHTML * times_on_sale_value).toFixed(0);
              dz_ed_2 = true;
              wx.setContent("已享折扣。");
            } else {
              wx.setContent("您已享折扣，快去支付吧。");
            }
          }
        }
      }).fail(function () {
        wx.setContent("发生了未知错误！");
      });
    },
    "buttons": {
      "yes": {
        "isHidden": true
      },
      "确定": {
        'keys': ["O"],
        'action': function () {}
      }
    }
  });
}
function vip_code_state() {
  if (document.getElementById("vip_code").value.length == 0) {
    $.alert({
      "boxWidth": "300px",
      'useBootstrap': false,
      "title": "提示",
      'content': "请输入VIP码"
    });
    return;
  }
  if (document.getElementById("vip_code").value.length >= 49) {
    $.alert({
      "boxWidth": "300px",
      "useBootstrap": false,
      "title": '提示',
      "content": "VIP码不正确。"
    });
    return;
  }
  $.confirm({
    "useBootstrap": false,
    "animationBounce": 1.5,
    "boxWidth": "300px",
    'title': "提示!",
    'content': function () {
      var xq = this;
      var xs = "http://www.jshaman.com:800/vip_code_state/";
      if (window.location.protocol.toLowerCase() == "https:") {
        xs = "https://www.jshaman.com:4430/vip_code_state/";
      }
      return $.ajax({
        "url": xs,
        'dataType': "json",
        'data': {
          "vip_code": document.getElementById("vip_code").value
        },
        "method": "POST",
        "error": function (xt, xu, xv) {}
      }).done(function (xw) {
        xq.setContent(xw.message);
      }).fail(function () {
        xq.setContent("发生了未知错误！");
      });
    },
    "buttons": {
      'yes': {
        "isHidden": true
      },
      "确定": {
        'keys': ["O"],
        'action': function () {}
      }
    }
  });
}
function show_hidden_vip_code(yc) {
  var yd = document.getElementById(yc);
  if (yd.type == "password") {
    yd.type = "text";
  } else {
    yd.type = "password";
  }
}
function buy(yn, yo, yp) {
  var yq = document.cookie.match(new RegExp("(/*|;|s)agent=([^;]*)"));
  if (yq == null) {
    yq = "none";
  } else {
    yq = yq[2];
  }
  if (yq.indexOf("#") != -1) {
    yq = "none";
  }
  if (yq.indexOf("?") != -1) {
    yq = "none";
  }
  if (yn == '') {
    $.alert({
      'boxWidth': "300px",
      "useBootstrap": false,
      'title': "提示",
      "content": "请输入邮箱地址，用于接收VIP码。"
    });
    document.getElementById("email").focus();
    return;
  }
  if (yn.length < 7 || yn.length > 30) {
    $.alert({
      'boxWidth': "300px",
      "useBootstrap": false,
      "title": '提示',
      "content": "邮箱格式错误。"
    });
    document.getElementById(yn).value = '';
    document.getElementById(yn).focus();
    return;
  }
  if (yn.indexOf("@") == -1 || yn.indexOf(".") == -1) {
    $.alert({
      "boxWidth": "300px",
      'useBootstrap': false,
      'title': '提示',
      "content": "邮箱格式错误。"
    });
    document.getElementById(yn).value = '';
    document.getElementById(yn).focus();
    return;
  }
  var yx = window.open("about:blank", "_blank");
  if (yx) {
    $.ajax({
      'type': "post",
      'url': "https://www.jshaman.com:99/buy/",
      'data': {
        'price': yo,
        "title": "JShaman2021提示：如支付遇到问题，请联系QQ：6465660",
        'passback': yn + "#" + "jshaman2021" + "~" + yp + "$" + yq
      },
      'success': function (yz) {
        yx.location.href = "https://openapi.alipay.com/gateway.do?" + yz;
      },
      "error": function (za) {
        console.log(za);
        alert("支付时发生错误，请联系客服解决。");
      }
    });
  } else {
    alert("Popup blocked by browser");
  }
}
if (long_on_sale_value == 1) {
  document.getElementById("long_discount_info").style.display = "none";
} else {
  document.getElementById("long_on_sale").innerHTML = long_on_sale_value * 10;
}
if (times_on_sale_value == 1) {
  document.getElementById("times_discount_info").style.display = "none";
} else {
  document.getElementById("times_on_sale").innerHTML = times_on_sale_value * 10;
}
function save_config_to_cookie() {
  save_to_cookie("checkbox-compact", document.getElementById("checkbox-compact").checked, 30);
  save_to_cookie("checkbox-rename_global_function_variable", document.getElementById("checkbox-rename_global_function_variable").checked, 30);
  save_to_cookie("checkbox-control_flow_flattening", document.getElementById("checkbox-control_flow_flattening").checked, 30);
  save_to_cookie("checkbox-dead_code_injection", document.getElementById("checkbox-dead_code_injection").checked, 30);
  save_to_cookie("checkbox-string_array", document.getElementById("checkbox-string_array").checked, 30);
  save_to_cookie("checkbox-string_array_encoding", document.getElementById("checkbox-string_array_encoding").checked, 30);
  save_to_cookie("checkbox-disable_console_output", document.getElementById("checkbox-disable_console_output").checked, 30);
  save_to_cookie("checkbox-debug_protection", document.getElementById("checkbox-debug_protection").checked, 30);
  save_to_cookie("checkbox-time_range", document.getElementById("checkbox-time_range").checked, 30);
  save_to_cookie("time_range_start", document.getElementById("time_range_start").value, 30);
  save_to_cookie("time_range_end", document.getElementById("time_range_end").value, 30);
  save_to_cookie("checkbox-domain_lock", document.getElementById("checkbox-domain_lock").checked, 30);
  save_to_cookie("domain_lock", document.getElementById("domain_lock").value.split(","), 30);
  save_to_cookie("checkbox-reserved_name", document.getElementById("checkbox-reserved_name").checked, 30);
  save_to_cookie("reserved_name", document.getElementById("reserved_name").value.split(","), 30);
  document.getElementById("cookie_tip").innerHTML = "配置已保存到Cookie。";
  document.getElementById("cookie_tip").style.display = "inline-block";
  setTimeout(function () {
    document.getElementById("cookie_tip").style.display = "none";
  }, 1500);
}
function read_config_from_cookie() {
  if (get_from_cookie("checkbox-compact") == '') {
    document.getElementById("cookie_tip").innerHTML = "Cookie中没有读取到配置信息。";
    document.getElementById("cookie_tip").style.display = "inline-block";
    setTimeout(function () {
      document.getElementById("cookie_tip").style.display = "none";
    }, 1500);
    return;
  }
  $("#checkbox-compact").iCheck(get_from_cookie("checkbox-compact") == "true" ? "check" : "uncheck");
  $("#checkbox-rename_global_function_variable").iCheck(get_from_cookie("checkbox-rename_global_function_variable") == "true" ? "check" : "uncheck");
  $("#checkbox-control_flow_flattening").iCheck(get_from_cookie("checkbox-control_flow_flattening") == "true" ? "check" : "uncheck");
  $("#checkbox-dead_code_injection").iCheck(get_from_cookie("checkbox-dead_code_injection") == "true" ? "check" : "uncheck");
  $("#checkbox-string_array").iCheck(get_from_cookie("checkbox-string_array") == "true" ? "check" : "uncheck");
  $("#checkbox-string_array_encoding").iCheck(get_from_cookie("checkbox-string_array_encoding") == "true" ? "check" : "uncheck");
  $("#checkbox-disable_console_output").iCheck(get_from_cookie("checkbox-disable_console_output") == "true" ? "check" : "uncheck");
  $("#checkbox-debug_protection").iCheck(get_from_cookie("checkbox-debug_protection") == "true" ? "check" : "uncheck");
  $("#checkbox-time_range").iCheck(get_from_cookie("checkbox-time_range") == "true" ? "check" : "uncheck");
  document.getElementById("time_range_start").value = get_from_cookie("time_range_start");
  document.getElementById("time_range_end").value = get_from_cookie("time_range_end");
  $("#checkbox-domain_lock").iCheck(get_from_cookie("checkbox-domain_lock") == "true" ? "check" : "uncheck");
  $("#domain_lock").importTags('');
  var zv = get_from_cookie("domain_lock").split(",");
  zv.forEach(function (zw) {
    if (document.getElementById("domain_lock").value.toString().indexOf(zw) == -1) {
      $("#domain_lock").addTag(zw);
    }
  });
  $("#checkbox-reserved_name").iCheck(get_from_cookie("checkbox-reserved_name") == "true" ? "check" : "uncheck");
  $("#reserved_name").importTags('');
  var aaa = get_from_cookie("reserved_name").split(",");
  aaa.forEach(function (aab) {
    if (document.getElementById("reserved_name").value.toString().indexOf(aab) == -1) {
      $("#reserved_name").addTag(aab);
    }
  });
  document.getElementById("cookie_tip").innerHTML = "已从Cookie读取配置。";
  document.getElementById("cookie_tip").style.display = "inline-block";
  setTimeout(function () {
    document.getElementById("cookie_tip").style.display = "none";
  }, 1500);
}
function save_upload_config_to_cookie() {
  save_to_cookie("checkbox-compact_upload", document.getElementById("checkbox-compact_upload").checked, 30);
  save_to_cookie("checkbox-rename_global_function_variable_upload", document.getElementById("checkbox-rename_global_function_variable_upload").checked, 30);
  save_to_cookie("checkbox-control_flow_flattening_upload", document.getElementById("checkbox-control_flow_flattening_upload").checked, 30);
  save_to_cookie("checkbox-dead_code_injection_upload", document.getElementById("checkbox-dead_code_injection_upload").checked, 30);
  save_to_cookie("checkbox-string_array_upload", document.getElementById("checkbox-string_array_upload").checked, 30);
  save_to_cookie("checkbox-string_array_encoding_upload", document.getElementById("checkbox-string_array_encoding_upload").checked, 30);
  save_to_cookie("checkbox-disable_console_output_upload", document.getElementById("checkbox-disable_console_output_upload").checked, 30);
  save_to_cookie("checkbox-debug_protection_upload", document.getElementById("checkbox-debug_protection_upload").checked, 30);
  save_to_cookie("checkbox-time_range_upload", document.getElementById("checkbox-time_range_upload").checked, 30);
  save_to_cookie("time_range_start_upload", document.getElementById("time_range_start_upload").value, 30);
  save_to_cookie("time_range_end_upload", document.getElementById("time_range_end_upload").value, 30);
  save_to_cookie("checkbox-domain_lock_upload", document.getElementById("checkbox-domain_lock_upload").checked, 30);
  save_to_cookie("domain_lock_upload", document.getElementById("domain_lock_upload").value.split(","), 30);
  save_to_cookie("checkbox-reserved_name_upload", document.getElementById("checkbox-reserved_name_upload").checked, 30);
  save_to_cookie("reserved_name_upload", document.getElementById("reserved_name_upload").value.split(","), 30);
  document.getElementById("cookie_tip_upload").innerHTML = "配置已保存到Cookie。";
  document.getElementById("cookie_tip_upload").style.display = "inline-block";
  setTimeout(function () {
    document.getElementById("cookie_tip_upload").style.display = "none";
  }, 1500);
}
function read_upload_config_from_cookie() {
  if (get_from_cookie("checkbox-compact_upload") == '') {
    document.getElementById("cookie_tip_upload").innerHTML = "Cookie中没有读取到配置信息。";
    document.getElementById("cookie_tip_upload").style.display = "inline-block";
    setTimeout(function () {
      document.getElementById("cookie_tip_upload").style.display = "none";
    }, 1500);
    return;
  }
  $("#checkbox-compact_upload").iCheck(get_from_cookie("checkbox-compact_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-rename_global_function_variable_upload").iCheck(get_from_cookie("checkbox-rename_global_function_variable_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-control_flow_flattening_upload").iCheck(get_from_cookie("checkbox-control_flow_flattening_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-dead_code_injection_upload").iCheck(get_from_cookie("checkbox-dead_code_injection_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-string_array_upload").iCheck(get_from_cookie("checkbox-string_array_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-string_array_encoding_upload").iCheck(get_from_cookie("checkbox-string_array_encoding_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-disable_console_output_upload").iCheck(get_from_cookie("checkbox-disable_console_output_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-debug_protection_upload").iCheck(get_from_cookie("checkbox-debug_protection_upload") == "true" ? "check" : "uncheck");
  $("#checkbox-time_range_upload").iCheck(get_from_cookie("checkbox-time_range_upload") == "true" ? "check" : "uncheck");
  document.getElementById("time_range_start_upload").value = get_from_cookie("time_range_start_upload");
  document.getElementById("time_range_end_upload").value = get_from_cookie("time_range_end_upload");
  $("#checkbox-domain_lock_upload").iCheck(get_from_cookie("checkbox-domain_lock_upload") == "true" ? "check" : "uncheck");
  $("#domain_lock_upload").importTags('');
  var aam = get_from_cookie("domain_lock_upload").split(",");
  aam.forEach(function (aan) {
    if (document.getElementById("domain_lock_upload").value.toString().indexOf(aan) == -1) {
      $("#domain_lock_upload").addTag(aan);
    }
  });
  $("#checkbox-reserved_name_upload").iCheck(get_from_cookie("checkbox-reserved_name_upload") == "true" ? "check" : "uncheck");
  $("#reserved_name_upload").importTags('');
  var aba = get_from_cookie("reserved_name_upload").split(",");
  aba.forEach(function (abb) {
    if (document.getElementById("reserved_name_upload").value.toString().indexOf(abb) == -1) {
      $("#reserved_name_upload").addTag(abb);
    }
  });
  document.getElementById("cookie_tip_upload").innerHTML = "已从Cookie读取配置。";
  document.getElementById("cookie_tip_upload").style.display = "inline-block";
  setTimeout(function () {
    document.getElementById("cookie_tip_upload").style.display = "none";
  }, 1500);
}
function get_webapi_introduction() {
  var acl = "http://www.jshaman.com/webapi_introduction.html";
  if (window.location.protocol.toLowerCase() == "https:") {
    acl = "https://www.jshaman.com/webapi_introduction.html";
  }
  $.ajax({
    "url": acl,
    'timeout': 3000,
    "contentType": "application/x-www-form-urlencoded; charset=utf-8",
    "type": "get",
    'complete': function (acp, acq) {}
  }).done(function (acr) {
    document.getElementById("webapi_introduction").innerHTML = acr;
  }).fail(function (act) {
    document.getElementById("webapi_introduction").innerHTML = "内容加载失败，请向客服反馈...";
    setTimeout(function () {
      get_webapi_introduction();
    }, 3000);
  });
}
function get_webapi_example() {
  var acv = "http://www.jshaman.com/webapi_example.html";
  if (window.location.protocol.toLowerCase() == "https:") {
    acv = "https://www.jshaman.com/webapi_example.html";
  }
  $.ajax({
    "url": acv,
    "timeout": 3000,
    'contentType': "application/x-www-form-urlencoded; charset=utf-8",
    "type": "get",
    "complete": function (acw, acx) {}
  }).done(function (acy) {
    document.getElementById("webapi_example").innerHTML = acy;
  }).fail(function (adb) {
    document.getElementById("webapi_example").innerHTML = "内容加载失败，请向客服反馈...";
    setTimeout(function () {
      get_webapi_example();
    }, 3000);
  });
}
function upload_zip_manual_question() {
  $.alert({
    "boxWidth": "360px",
    "useBootstrap": false,
    'title': "异步混淆加密",
    'content': "先上传文件，之后再来下载。<br><span style=\"font-size:12px;\">文件上传后会进入服务器处理队列，稍后由人工或程序进行异步混淆加密，上传和处理后的文件可随时手动下载或删除。<span><br><span style=\"font-size:11px;\">注：此方式上传的文件，<span style=\"font-size:16px;\">不受服务器状态影响，服务器繁忙也可正常混淆加密，</span>但会有延时，非可立即完成，可能需稍等候。如长时间未完成处理，请联系客服处理。</span>"
  });
}
function submit_js_manual_question() {
  $.alert({
    'boxWidth': "360px",
    'useBootstrap': false,
    "title": "异步混淆加密",
    "content": "先提交代码，之后再来下载。<br><span style=\"font-size:12px;\">代码提交后会进入服务器处理队列，稍后由人工或程序进行异步进行混淆加密，上传和处理后的代码可随时手动获取或删除。<span><br><span style=\"font-size:11px;\">注：此方式提交的代码，<span style=\"font-size:16px;\">不受服务器状态影响，服务器繁忙也可正常混淆加密，</span>但会有延时，非可立即完成，可能需稍等候。如长时间未完成处理，请联系客服处理。</span>"
  });
}
function delete_upload_js(adf, adg) {
  if (document.getElementById(adf).value.length == 0) {
    $.alert({
      "boxWidth": "320px",
      'useBootstrap': false,
      'title': "提示",
      'content': "请输入VIP码。"
    });
    return;
  }
  if (document.getElementById(adf).value.length >= 49) {
    $.alert({
      'boxWidth': "320px",
      "useBootstrap": false,
      "title": "错误!",
      "content": "VIP码不正确。"
    });
    return;
  }
  $.confirm({
    "useBootstrap": false,
    "animationBounce": 1.5,
    "boxWidth": "360px",
    'title': false,
    'content': function () {
      var adp = this;
      var adq = document.getElementById(adf).value;
      var adr = "http://" + jshaman_servers[current_jshaman_server].http + "/delete_obfuscate_later/";
      if (window.location.protocol.toLowerCase() == "https:") {
        adr = "https://" + jshaman_servers[current_jshaman_server].https + "/delete_obfuscate_later/";
      }
      adr = "http://" + async_obfuscate_servers[current_jshaman_server].http + "/delete_obfuscate_later/";
      if (window.location.protocol.toLowerCase() == "https:") {
        adr = "https://" + async_obfuscate_servers[current_jshaman_server].https + "/delete_obfuscate_later/";
      }
      return $.ajax({
        "url": adr,
        'dataType': "json",
        "data": {
          "vip_code": adq,
          "delete_type": adg
        },
        "method": "POST"
      }).done(function (ads) {
        if (ads.state == 0) {
          adp.setContent(ads.message);
        } else {
          adp.setContent(ads.message);
        }
      }).fail(function () {
        adp.setContent("发生了未知错误，请联系客服咨询了解。");
      });
    },
    'buttons': {
      "确定": {
        'action': function () {}
      }
    }
  });
}
function get_later_obfuscated_js() {
  if (document.getElementById("common_vip_code").value.length == 0) {
    $.alert({
      "boxWidth": "320px",
      "useBootstrap": false,
      "title": '提示',
      "content": "请输入VIP码。"
    });
    return;
  }
  if (document.getElementById("common_vip_code").value.length >= 49) {
    $.alert({
      "boxWidth": "320px",
      "useBootstrap": false,
      'title': "错误!",
      'content': "VIP码不正确。"
    });
    return;
  }
  var adu = "http://" + jshaman_servers[current_jshaman_server].http + "/get_later_obfuscated_js/";
  if (window.location.protocol.toLowerCase() == "https:") {
    adu = "https://" + jshaman_servers[current_jshaman_server].https + "/get_later_obfuscated_js/";
  }
  adu = "http://" + async_obfuscate_servers[current_jshaman_server].http + "/get_later_obfuscated_js/";
  if (window.location.protocol.toLowerCase() == "https:") {
    adu = "https://" + async_obfuscate_servers[current_jshaman_server].https + "/get_later_obfuscated_js/";
  }
  var adv = document.getElementById("common_vip_code").value;
  $.confirm({
    "useBootstrap": false,
    'animationBounce': 1.5,
    "boxWidth": "360px",
    'title': false,
    'content': function () {
      var adw = this;
      return $.ajax({
        'url': adu,
        'dataType': "json",
        'data': {
          "vip_code": adv
        },
        "method": "POST"
      }).done(function (adx) {
        if (adx.state == 0) {
          adw.setContent(adx.message);
          document.getElementById("common_result").click();
          document.getElementById("common_code_result").value = adx.content;
        } else {
          adw.setContent(adx.message);
        }
      }).fail(function () {
        adw.setContent("发生了未知错误，请联系客服咨询了解。");
      });
    },
    'buttons': {
      '确定': {}
    }
  });
}
function get_later_obfuscated_zip() {
  if (document.getElementById("vip_code_upload").value.length == 0) {
    $.alert({
      'boxWidth': "320px",
      "useBootstrap": false,
      "title": "提示",
      'content': "请输入VIP码。"
    });
    return;
  }
  if (document.getElementById("vip_code_upload").value.length >= 49) {
    $.alert({
      'boxWidth': "320px",
      "useBootstrap": false,
      'title': "错误!",
      "content": "VIP码不正确。"
    });
    return;
  }
  var aev = "http://" + jshaman_servers[current_jshaman_server].http + "/get_later_obfuscated_zip/";
  if (window.location.protocol.toLowerCase() == "https:") {
    aev = "https://" + jshaman_servers[current_jshaman_server].https + "/get_later_obfuscated_zip/";
  }
  aev = "http://" + async_obfuscate_servers[current_jshaman_server].http + "/get_later_obfuscated_zip/";
  if (window.location.protocol.toLowerCase() == "https:") {
    aev = "https://" + async_obfuscate_servers[current_jshaman_server].https + "/get_later_obfuscated_zip/";
  }
  var afa = document.getElementById("vip_code_upload").value;
  $.confirm({
    "useBootstrap": false,
    "animationBounce": 1.5,
    'boxWidth': "360px",
    "title": false,
    'content': function () {
      var afb = this;
      return $.ajax({
        "url": aev,
        "dataType": "json",
        'data': {
          "vip_code": afa
        },
        'method': "POST"
      }).done(function (afc) {
        if (afc.state == 0) {
          afb.close();
          $.confirm({
            "useBootstrap": false,
            'animationBounce': 1.5,
            'boxWidth': "360px",
            "title": false,
            "content": afc.message,
            "buttons": {
              "下载": {
                "isHidden": false,
                "action": function () {
                  var afd = "http://" + jshaman_servers[current_jshaman_server].http + "/" + afc.content;
                  if (window.location.protocol.toLowerCase() == "https:") {
                    afd = "https://" + jshaman_servers[current_jshaman_server].https + "/" + afc.content;
                  }
                  afd = "http://" + async_obfuscate_servers[current_jshaman_server].http + "/" + afc.content;
                  if (window.location.protocol.toLowerCase() == "https:") {
                    afd = "https://" + async_obfuscate_servers[current_jshaman_server].https + "/" + afc.content;
                  }
                  window.open(afd);
                }
              },
              '取消': {
                "action": function () {}
              }
            }
          });
        } else {
          afb.setContent(afc.message);
        }
      }).fail(function () {
        afb.setContent("发生了未知错误，请联系客服咨询了解详细。");
      });
    },
    "buttons": {
      "确定": {
        "action": function () {}
      }
    }
  });
}
if (async_obfuscate_enable == false) {
  document.getElementById("async_obfuscate_js").style.display = "none";
  document.getElementById("async_obfuscate_zip").style.display = "none";
} else {
  document.getElementById("async_obfuscate_js").style.display = "block";
  document.getElementById("async_obfuscate_zip").style.display = "block";
}
function ani_server_state() {
  if (document.getElementById("server_state_bg").style.opacity == 1) {
    document.getElementById("server_state_bg").style.opacity = 0.6;
  } else {
    document.getElementById("server_state_bg").style.opacity = 1;
  }
}
setInterval(function () {
  ani_server_state();
}, 1000);
function zoom_small() {
  if (document.body.style.zoom == '' || document.body.style.zoom == 0 || isNaN(document.body.style.zoom) == true) {
    document.body.style.zoom = 1;
  }
  document.body.style.zoom = document.body.style.zoom * 0.9;
  set_cookie("zoom", document.body.style.zoom);
  document.getElementById("zoom").innerHTML = parseFloat(document.body.style.zoom).toFixed(2);
}
function zoom_big() {
  if (document.body.style.zoom == '' || document.body.style.zoom == 0 || isNaN(document.body.style.zoom) == true) {
    document.body.style.zoom = 1;
  }
  document.body.style.zoom = document.body.style.zoom * 1.1;
  set_cookie("zoom", document.body.style.zoom);
  document.getElementById("zoom").innerHTML = parseFloat(document.body.style.zoom).toFixed(2);
}
function zoom_default() {
  document.body.style.zoom = 1;
  set_cookie("zoom", document.body.style.zoom);
  document.getElementById("zoom").innerHTML = parseFloat(document.body.style.zoom).toFixed(2);
}
$(function () {
  var agf = 1;
  if ($("#nav").css("display") == "none") {
    agf = 0;
  } else {
    agf = 1;
  }
  $(".headerCon img").click(function () {
    $(".seconed1").click();
  });
  $(window).resize(function () {
    agm();
  });
  agm();
  function agm() {
    var agq = document.body.clientWidth;
    if (agq <= 1024) {
      $(".btn").removeClass("hide");
      $(".header ul").hide();
      agr();
    } else {
      $(".btn").addClass("hide");
      $(".header ul").show();
      $("body").css("background", "none");
      $.each($("#nav li"), function (ags, agt) {
        var agv = $(this).width();
        var agx = agv / 2;
        $(this).find("span").css("left", agx + "xp".split("").reverse().join(""));
        if ($(this).hasClass("active")) {
          agr();
        }
      });
    }
  }
  $("#nav-btn").click(function () {
    if (agf == 1) {
      agf = 0;
      $("#nav").css("display", "none");
    } else {
      agf = 1;
      $("#nav").css("display", "block");
    }
  });
  $.each($(".headerCon ul li"), function (aht, ahu) {
    var ahw = $(this).width();
    var ahy = ahw / 2;
    $(this).find("span").css("left", ahy + "px");
    $(this).click(function () {
      $("#appName").scrollTop(0);
      var ahz = $(".sectionCon .section")[aht];
      $(ahz).addClass("active").siblings().removeClass("active");
      $(".bar ul li:nth-child(" + (aht + 1) + ")").addClass("active").siblings().removeClass("active");
      $(this).addClass("active").siblings().removeClass("active");
      agr();
    });
  });
  function agr() {
    {
      var aid;
      var aie;
      aid = ["#6633cc", "#00cc66", "#0087FF", "#FF7256", "#6800FF"];
      aie = ["#00cc33", "#0033ff", "#E42D68", "#0099ff", "#DCB61F"];
      sec_start_color = ["#6666ff", "#FF7256", "#00cc33", "#ff7800", "#0087FF", "#FF7256"];
      sec_end_color = ["#00ff99", "#0099ff", "#003399", "#8033CC", "#E42D68", "#0099ff"];
      var aif = parseInt(aid.length * Math.random());
      var aig = "linear-gradient(45deg," + aid[aif] + "," + aie[aif] + ")";
      var aih = parseInt(sec_start_color.length * Math.random());
      var aij = "linear-gradient(45deg," + sec_start_color[aih] + "," + sec_end_color[aih] + ")";
      $("body").css("background", aig);
    }
    {
      var ais = document.body.clientWidth;
      var aiu = document.getElementById("png_ani");
      aiu.style.opacity = 0.3;
      aiu.width = ais / 2;
      aiu.style.paddingTop = parseInt(100 * Math.random() + 70) + "xp".split("").reverse().join("");
      aiu.style.paddingLeft = ais - aiu.width - parseInt(100 * Math.random() + 30) + "px";
      aiu.src = "./images/svg/ani_" + parseInt(30 * Math.random() + 1) + ".svg";
    }
    {
      document.getElementById("gainian").style.background = aig;
      document.getElementById("about_us").style.background = aij;
    }
  }
  $.each($(".bar ul li"), function (aiy, aiz) {
    $(this).click(function () {
      document.getElementById("png_ani").style.opacity = 0;
      $("#appName").scrollTop(0);
      agr();
      var aja = $(".sectionCon .section")[aiy];
      $(this).addClass("active").siblings().removeClass("active");
      $(aja).addClass("active").siblings().removeClass("active");
      $(".headerCon ul li:nth-child(" + (aiy + 1) + ")").addClass("active").siblings().removeClass("active");
    });
  });
  $(".downloadbtn").click(function () {
    window.open("ShareWAF.zip");
  });
  $.each($(".polymorphic .sectionbody dd p"), function (ajf, ajg) {
    $(this).click(function () {
      var aji = $(".polymorphic .sectionbody dt")[ajf];
      $(this).addClass("active").siblings().removeClass("active");
      $(aji).addClass("show").siblings().removeClass("show");
    });
  });
});