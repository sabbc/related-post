function showrecentpostswiththumbs(t){document.write('<ul class="recent_posts_with_thumbs">');for(var e=0;e<numposts;e++){var r,n,i=t.feed.entry[e],m=i.title.$t;if(e==t.feed.entry.length)break;for(var l=0;l<i.link.length;l++){if("replies"==i.link[l].rel&&"text/html"==i.link[l].type)var o=i.link[l].title,u=i.link[l].href;if("alternate"==i.link[l].rel){r=i.link[l].href;break}}try{n=(n=i.media$thumbnail.url).replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}catch(t){s=i.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),n=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://lh4.ggpht.com/_IjrRiI_bVb0/TOCYn1fMjII/AAAAAAAAF24/5Fvv-HJqh74/loading-2.gif"}var h=i.published.$t,w=h.substring(0,4),f=h.substring(5,7),g=h.substring(8,10),p=new Array;if(p[1]="Jan",p[2]="Feb",p[3]="Mar",p[4]="Apr",p[5]="May",p[6]="Jun",p[7]="Jul",p[8]="Aug",p[9]="Sep",p[10]="Oct",p[11]="Nov",p[12]="Dec",document.write('<li class="clearfix">'),1==showpostthumbnails&&document.write('<img class="recent_thumb lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="'+thumb_width+'" height="'+thumb_height+'" alt="'+m+'" title="'+m+'" data-src="'+n+'"/>'),document.write('<a href="'+r+'" target ="_blank">'+m+"</a><br>"),"content"in i)var _=i.content.$t;else if("summary"in i)_=i.summary.$t;else _="";if(_=_.replace(/<\S[^>]*>/g,""),1==showpostsummary)if(_.length<numchars)document.write(_),document.write;else{var k=(_=_.substring(0,numchars)).lastIndexOf(" ");_=_.substring(0,k),document.write(_+"..."),document.write}var v="",y=0;document.write("<br>"),1==showpostdate&&(v=v+p[parseInt(f,10)]+"-"+g+" - "+w,y=1),1==showcommentnum&&(1==y&&(v+=" | "),"1 Comments"==o&&(o="1 Comment"),"0 Comments"==o&&(o="No Comments"),v+=o='<a href="'+u+'" target ="_top">'+o+"</a>",y=1),1==displaymore&&(1==y&&(v+=" | "),v=v+'<a href="'+r+'" class="url" target ="_blank">Read more&#187;&#187;</a>',y=1),document.write(v),document.write("</li>"),0==displayseparator&&e!=numposts-1&&document.write('<hr color="#ddd" size=0.1>')}document.write("</ul>")}
