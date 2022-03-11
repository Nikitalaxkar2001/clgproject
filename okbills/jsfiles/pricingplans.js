let get_plans = JSON.parse(localStorage.getItem('getplans'))
			console.log(get_plans);
			for (i = 0; i < get_plans.length; i++) {

				let features = '';
				//console.log( get_plans[i].plan_features);
				for(j=0;j < get_plans[i].plan_features.length; j++){
				// 	//console.log('Anil');
				 	features += '<li><strong> </strong> '+get_plans[i].plan_features[j].feature+'</li>';
				}
				//console.log('hi');
				$('.pricingplans').append(`<div class="col-sm-6 col-lg-6 col-xl-4">
												<div class="card">
													<div class="card-body text-center pricing ">
														<div class="card-category">`+get_plans[i].plan_title+`</div>
                                                        <h3 class=" my-4 "><del> &#8377;`+get_plans[i].plan_mrp_cost+`</del> </h3>
														<div class="display-4 my-4"> &#8377;`+get_plans[i].plan_sell_cost+`</div>
														<h3 class=" my-4 ">`+get_plans[i].plan_billing+`</h3>
														<h6 class=" my-4 ">`+get_plans[i].plan_desc+`</h6>
														<ul class="list-unstyled leading-loose">
															 `+features+`
														</ul>
														<div class="text-center mt-4">
															<a href="#" id="notify" class="btn btn-pink btn-block" onclick = ' purchase()' >Buy Now</a>
														</div>
													</div>
												</div>
											</div><!-- COL-END -->`);
										}
				const electron = require('electron')
				const path = require('path')
				const BrowserWindow = electron.remote.BrowserWindow;
				function purchase(){
					const modelPath = path.join('file://' ,__dirname,'payment.html')
					let win = new BrowserWindow({
						alwaysOnTop:true,
						width :800,
						height : 600,
						icon : 'images/oklabs.png',
						webPreferences: {
							nodeIntegration: true,
							enableRemoteModule : true,
						  },
						  minimizable:false ,
						  movable:false,
						  //resizable:false,
						  skipTaskbar:true
					})
					win.on('close',function(){ win = null})
					win.loadURL(modelPath)
					win.show()
					 
				}
				$('#paybox').hide();
				$('#pay').show();

				function payment(){
					$('#pay').hide();
					$('#paybox').show();
			}
			

