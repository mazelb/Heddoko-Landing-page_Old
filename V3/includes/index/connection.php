<section id="connection" itemscope itemtype="http://schema.org/Product">
    <meta itemprop="name" content="Heddoko Suit">

	<div class="container">
		<div class="row">

			<div class="col-xs-12 col-md-6 image">
                <?= Heddoko::pin([
                    'media' => 'http://www.heddoko.com/images/index/products.png',
                    'description' => 'Heddoko smart garments and apps'
                ]) ?>
				<img itemprop="image" src="images/index/products.png" alt="Heddoko smart garments and apps">
			</div>

            <div class="col-xs-12 col-md-6 content">
				<h2 data-animated="0">Fully Connected <span></span></h2>

				<p itemprop="description" data-animated="0">
                    The product consists of 3 components
                </p>

				<div class="col-xs-12">
					<div class="row">
                        <div class="col-xs-12 col-sm-4" data-animated="0">
                            <div
                                class="has-icon-img"
                                style="background-image: url(images/icons/icon-body.svg)"
                                title="Smart compression garment"></div>
                            <p>Smart compression garment</p>
                        </div>
                        <div class="col-xs-12 col-sm-4" data-animated="0">
                            <div
                                class="has-icon-img"
                                style="background-image: url(images/icons/icon-white-feedback.svg)"
                                title="Mobile app"></div>
                            <p>Mobile app</p>
                        </div>
                        <div class="col-xs-12 col-sm-4" data-animated="0">
                            <div
                                class="has-icon-img"
                                style="background-image: url(images/icons/icon-white-dashboard.svg)"
                                title="Team and athlete managment dashboard"></div>
                            <p>Web app</p>
                        </div>
					</div>
				</div>

				<p data-animated="0">
					<a itemprop="url" href="/product/#howitworks" class="btn btn-default" id="index_pg_connection_learnmore_btn">
                        Learn more
                    </a>
				</p>
			</div>
		</div>
	</div>
</section>
