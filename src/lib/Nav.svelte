<script lang="ts">
	import { base } from "$app/paths";

	console.log(base);
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
	<div class="container w-50">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a
						class="nav-link active"
						aria-current="page"
						href={base + "/"}>home</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={base + "/sobre"}>sobre mim</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={base + "/contato"}>contato</a>
				</li>
			</ul>
			<div class="d-flex" role="search">
				<button class="btn btn-success rounded-circle" type="submit"
					>x</button
				>
			</div>
		</div>
	</div>
</nav>
